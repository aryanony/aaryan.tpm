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
    grad.addColorStop(0.3, 'rgba(255,255,255,0.7)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(cvs);
  }

  // Network-Aware Graphics Scaling
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isSlowNetwork = conn ? (conn.saveData || ['slow-2g', '2g', '3g'].includes(conn.effectiveType)) : false;

  let N = window.innerWidth < 768 ? 100 : 250;
  if (isSlowNetwork) N = Math.floor(N * 0.3);

  // Group 1: Small background dust (sharp)
  const pos1 = new Float32Array(N * 3);
  // Group 2: Larger glowing orbs
  const pos2 = new Float32Array(Math.floor(N * 0.4) * 3);

  function fillSphere(arr, count) {
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      arr[i*3]   = radius * Math.sin(phi) * Math.cos(theta);
      arr[i*3+1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i*3+2] = radius * Math.cos(phi);
    }
  }
  fillSphere(pos1, N);
  fillSphere(pos2, Math.floor(N * 0.4));

  const geo1 = new THREE.BufferGeometry(); geo1.setAttribute('position', new THREE.BufferAttribute(pos1, 3));
  const geo2 = new THREE.BufferGeometry(); geo2.setAttribute('position', new THREE.BufferAttribute(pos2, 3));
  
  const glowTex = createGlowTexture();
  const baseColor = isDark() ? 0x0ea5e9 : 0x0284c7; // Bright cyan for dark mode, solid blue for light mode

  const mat1 = new THREE.PointsMaterial({
    size: 0.04, 
    color: baseColor,
    transparent: true, 
    opacity: isDark() ? 0.4 : 0.3,
    map: glowTex,
    depthWrite: false,
    sizeAttenuation: true,
  });

  const mat2 = new THREE.PointsMaterial({
    size: 0.15, 
    color: baseColor,
    transparent: true, 
    opacity: isDark() ? 0.6 : 0.4,
    map: glowTex,
    depthWrite: false,
    sizeAttenuation: true,
  });

  const pts1 = new THREE.Points(geo1, mat1);
  const pts2 = new THREE.Points(geo2, mat2);
  
  const particleGroup = new THREE.Group();
  particleGroup.add(pts1);
  particleGroup.add(pts2);
  scene.add(particleGroup);

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
    
    // Respect reduce-motion preference
    if (document.documentElement.classList.contains('reduce-motion')) return;

    // Smooth continuous drift without expensive buffer uploads!
    const time = clock.getElapsedTime();
    particleGroup.rotation.y = time * 0.03 + mouse.x;
    particleGroup.rotation.x = time * 0.01 + mouse.y;
    particleGroup.rotation.z = time * 0.02;

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
    const newColor = isDark() ? 0x0ea5e9 : 0x0284c7;
    mat1.color.set(newColor);
    mat2.color.set(newColor);
    mat1.opacity = isDark() ? 0.4 : 0.3;
    mat2.opacity = isDark() ? 0.6 : 0.4;
  });
}
