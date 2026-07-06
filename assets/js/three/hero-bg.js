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

  // Particles
  const N   = window.innerWidth < 768 ? 500 : 1200;
  const pos = new Float32Array(N * 3);
  const vel = [];
  for (let i = 0; i < N; i++) {
    pos[i*3]   = (Math.random() - .5) * 16;
    pos[i*3+1] = (Math.random() - .5) * 10;
    pos[i*3+2] = (Math.random() - .5) * 5;
    vel.push({ x: (Math.random() - .5) * .002, y: (Math.random() - .5) * .002 });
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.04, 
    color: isDark() ? 0x0D9488 : 0x0F766E,
    transparent: true, 
    opacity: isDark() ? 0.45 : 0.28, 
    sizeAttenuation: true,
  });
  const pts = new THREE.Points(geo, mat);
  scene.add(pts);

  const mouse = { x: 0, y: 0 };
  canvas.addEventListener('mousemove', e => {
    mouse.x =  (e.clientX / window.innerWidth  - .5) * .5;
    mouse.y = -(e.clientY / window.innerHeight - .5) * .5;
  });

  let active = true;
  const clock = new THREE.Clock();
  
  function frame() {
    if (!active) return;
    requestAnimationFrame(frame);
    const arr = geo.attributes.position.array;
    for (let i = 0; i < N; i++) {
      arr[i*3]   += vel[i].x;
      arr[i*3+1] += vel[i].y;
      if (arr[i*3]   >  8) arr[i*3]   = -8;
      if (arr[i*3]   < -8) arr[i*3]   =  8;
      if (arr[i*3+1] >  5) arr[i*3+1] = -5;
      if (arr[i*3+1] < -5) arr[i*3+1] =  5;
    }
    geo.attributes.position.needsUpdate = true;
    pts.rotation.x += (mouse.y * .05 - pts.rotation.x) * .05;
    pts.rotation.y += (mouse.x * .05 - pts.rotation.y) * .05;
    pts.rotation.z = clock.getElapsedTime() * .02;
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
