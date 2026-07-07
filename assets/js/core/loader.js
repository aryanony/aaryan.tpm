// assets/js/core/loader.js

export function initLoader() {
  const loader = document.querySelector('.loader-wrapper');
  const bar = document.querySelector('.loader-progress-bar');
  if (!loader || !bar) return;

  let progress = 0;
  
  const stages = [
    document.getElementById('tpmStage1'),
    document.getElementById('tpmStage2'),
    document.getElementById('tpmStage3'),
    document.getElementById('tpmStage4')
  ];
  
  const graphLine = document.getElementById('tpmGraphLine');
  const graphLen = graphLine ? graphLine.getTotalLength() : 1000;
  if(graphLine) {
    graphLine.style.strokeDasharray = graphLen;
    graphLine.style.strokeDashoffset = graphLen;
  }

  const phaseText = document.getElementById('tpmPhaseText');
  const percentText = document.getElementById('tpmPercentText');
  
  const phaseLabels = ['PLANNING SPRINT', 'BUILDING COMPONENTS', 'TESTING & QA', 'SHIPPING TO PRODUCTION'];

  // Accurately track actual loaded resources
  const resources = document.querySelectorAll('img, script, link[rel="stylesheet"]');
  const totalResources = resources.length || 1;
  let loadedResources = 0;
  
  let targetProgress = 0;
  let currentProgress = 0;
  let isComplete = false;

  const updateTarget = () => {
    let base = 0;
    if (document.readyState === 'loading') base = 10;
    else if (document.readyState === 'interactive') base = 40;
    else if (document.readyState === 'complete') {
      base = 100;
      isComplete = true;
    }
    
    let resourcePercent = (loadedResources / totalResources) * 50; 
    let calc = Math.max(targetProgress, base + resourcePercent);
    if(calc > 99 && !isComplete) calc = 99;
    targetProgress = calc;
  };

  resources.forEach(res => {
    if(res.complete || res.readyState === 4 || res.readyState === 'complete') {
      loadedResources++;
    } else {
      res.addEventListener('load', () => { loadedResources++; updateTarget(); }, {once:true});
      res.addEventListener('error', () => { loadedResources++; updateTarget(); }, {once:true});
    }
  });
  
  document.addEventListener('readystatechange', updateTarget);
  updateTarget(); // Initial calculation

  // Smooth buttery animation loop synced to monitor refresh rate
  const animate = () => {
    // If still waiting on resources but stuck at 0, slowly creep up
    if (targetProgress < 10 && currentProgress < 10) targetProgress += 0.2;
    if (isComplete) targetProgress = 100;

    // Fast, ultra-smooth easing
    let diff = targetProgress - currentProgress;
    currentProgress += diff * 0.25; // 25% easing per frame for ultra-fast smoothness

    if (currentProgress > 99.9 && isComplete) {
      currentProgress = 100;
    }

    let displayProgress = Math.floor(currentProgress);
    
    // Update DOM safely
    if (bar) bar.style.width = `${displayProgress}%`;
    if (percentText) percentText.textContent = `${displayProgress}%`;
    if (graphLine) {
      graphLine.style.strokeDashoffset = Math.max(0, graphLen - (graphLen * (currentProgress / 100)));
    }

    // Determine stage (0 to 3)
    let stageIdx = 0;
    if (displayProgress > 75) stageIdx = 3;
    else if (displayProgress > 50) stageIdx = 2;
    else if (displayProgress > 25) stageIdx = 1;
    
    if(phaseText) phaseText.textContent = phaseLabels[stageIdx];
    
    // Activate stages
    stages.forEach((st, i) => {
      if (st) {
        if (i <= stageIdx) st.classList.add('active');
        else st.classList.remove('active');
      }
    });

    if (currentProgress < 100) {
      requestAnimationFrame(animate);
    } else {
      finish();
    }
  };

  // Complete and remove loader on load
  const finish = () => {
    if (bar) bar.style.width = '100%';
    if(percentText) percentText.textContent = '100%';
    if(phaseText) phaseText.textContent = 'SYSTEM ONLINE';
    if(graphLine) graphLine.style.strokeDashoffset = 0;
    
    stages.forEach(st => st && st.classList.add('active'));
    
    setTimeout(() => {
      loader.classList.add('loaded');
      setTimeout(() => {
        loader.remove();
      }, 300);
    }, 100);
  };

  // Start loop
  requestAnimationFrame(animate);
}
