// assets/js/animations/marquee.js

export function initMarquee() {
  const track = document.querySelector('.marquee__track');
  if (!track) return;

  // Duplicate items dynamically to ensure seamless loop
  const content = track.innerHTML;
  track.innerHTML = content + content; // Duplicate for smooth looping
  
  // Optional: pause animation on hover
  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  
  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
}
