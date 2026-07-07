// assets/js/three/hero-bg.js

import * as THREE from 'three';

export function initHeroBackground() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.WebGLRenderingContext) return;

  const isDark  = () => document.documentElement.getAttribute('data-theme') !== 'light';
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
  camera.position.z = 5;

  function createGlowTexture() {
    const cvs = document.createElement('canvas');
    cvs.width = 32; cvs.height = 32;
    const ctx = cvs.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    grad.addColorStop(0.5, 'rgba(255,255,255,0.2)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(cvs);
  }

  // Particles - Balanced count with modern glowing aesthetic
  const N   = window.innerWidth < 768 ? 100 : 250;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    // Spread them over a wide cosmic cylinder/sphere
    const radius = 3 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    pos[i*3]   = radius * Math.sin(phi) * Math.cos(theta);
    pos[i*3+1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i*3+2] = radius * Math.cos(phi);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  
  const mat = new THREE.PointsMaterial({
    size: 0.18, 
    color: isDark() ? 0x0ea5e9 : 0x0ea5e9, // Bright modern cyan
    transparent: true, 
    opacity: 0.6,
    map: createGlowTexture(),
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const pts = new THREE.Points(geo, mat);
  scene.add(pts);

  const mouse = { x: 0, y: 0 };
  canvas.addEventListener('mousemove', e => {
    mouse.x =  (e.clientX / window.innerWidth  - .5) * .2;
    mouse.y = -(e.clientY / window.innerHeight - .5) * .2;
  });

  let active = true;
  const clock = new THREE.Clock();
  
  function frame() {
    if (!active) return;
    requestAnimationFrame(frame);
    
    // Smooth continuous drift without expensive buffer uploads!
    const time = clock.getElapsedTime();
    pts.rotation.y = time * 0.03 + mouse.x;
    pts.rotation.x = time * 0.01 + mouse.y;
    pts.rotation.z = time * 0.02;

    renderer.render(scene, camera);
  }
  frame();

  new IntersectionObserver(([e]) => { active = e.isIntersecting; }).observe(canvas);
  
  new ResizeObserver(() => {
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
    camera.updateProjectionMatrix();
  }).observe(canvas.parentElement);

  document.addEventListener('themechange', () => {
    mat.color.set(isDark() ? 0x0D9488 : 0x0F766E);
    mat.opacity = isDark() ? 0.45 : 0.28;
  });
}
