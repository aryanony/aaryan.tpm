// assets/js/animations/typewriter.js

export function initTypewriter(config) {
  const el = document.querySelector('.hero__typewriter');
  if (!el) return;

  const words = [
    "Technical Project Manager",
    "HealthTech Digital Strategist",
    "AI Automation Consultant",
    "Micro-SaaS Product Builder",
    "Developer-Turned-PM"
  ];
  
  let wordIndex = 0;
  let text = '';
  let isDeleting = false;

  function tick() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      text = currentWord.substring(0, text.length - 1);
    } else {
      text = currentWord.substring(0, text.length + 1);
    }

    el.textContent = text;
    
    // Set typewriter transition delays based on typing state
    let delta = isDeleting ? 40 : 60;

    if (!isDeleting && text === currentWord) {
      delta = 2500; // Pause at full phrase
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delta = 500; // Brief pause before starting next phrase
    }

    setTimeout(tick, delta);
  }

  tick();
}
