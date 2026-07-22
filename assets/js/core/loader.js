// assets/js/core/loader.js

export function initLoader() {
  const loader = document.querySelector('.loader-wrapper');
  const bar = document.querySelector('.loader-progress-bar');
  if (!loader) return;

  const quickRemove = () => {
    loader.classList.add('loaded');
    setTimeout(() => {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 80);
  };

  // If repeat navigation in session or DOM already complete, dismiss instantly (80ms flash)
  if (document.readyState === 'complete' || sessionStorage.getItem('ag-fast-nav')) {
    if (bar) bar.style.width = '100%';
    quickRemove();
    return;
  }

  try { sessionStorage.setItem('ag-fast-nav', '1'); } catch (e) {}

  const stages = [
    document.getElementById('tpmStage1'),
    document.getElementById('tpmStage2'),
    document.getElementById('tpmStage3'),
    document.getElementById('tpmStage4')
  ];
  
  const graphLine = document.getElementById('tpmGraphLine');
  const graphLen = graphLine ? graphLine.getTotalLength() : 1000;
  if (graphLine) {
    graphLine.style.strokeDasharray = graphLen;
    graphLine.style.strokeDashoffset = graphLen;
  }

  const phaseText = document.getElementById('tpmPhaseText');
  const percentText = document.getElementById('tpmPercentText');
  const phaseLabels = ['PLANNING SPRINT', 'BUILDING COMPONENTS', 'TESTING & QA', 'SHIPPING TO PRODUCTION'];

  let targetProgress = 100;
  let currentProgress = 0;
  let finished = false;

  const animate = () => {
    if (finished) return;

    let diff = targetProgress - currentProgress;
    currentProgress += diff * 0.65; // Ultra-fast 65% frame lerp

    if (currentProgress > 98) {
      currentProgress = 100;
      finished = true;
      if (bar) bar.style.width = '100%';
      if (percentText) percentText.textContent = '100%';
      if (phaseText) phaseText.textContent = 'SYSTEM ONLINE';
      if (graphLine) graphLine.style.strokeDashoffset = 0;
      stages.forEach(st => st && st.classList.add('active'));
      quickRemove();
      return;
    }

    let displayProgress = Math.floor(currentProgress);
    if (bar) bar.style.width = `${displayProgress}%`;
    if (percentText) percentText.textContent = `${displayProgress}%`;
    if (graphLine) {
      graphLine.style.strokeDashoffset = Math.max(0, graphLen - (graphLen * (currentProgress / 100)));
    }

    let stageIdx = 0;
    if (displayProgress > 75) stageIdx = 3;
    else if (displayProgress > 50) stageIdx = 2;
    else if (displayProgress > 25) stageIdx = 1;
    
    if (phaseText) phaseText.textContent = phaseLabels[stageIdx];
    stages.forEach((st, i) => {
      if (st) {
        if (i <= stageIdx) st.classList.add('active');
        else st.classList.remove('active');
      }
    });

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  // Hard cap fallback: loader MUST dismiss within 180ms max
  setTimeout(() => {
    if (!finished) {
      finished = true;
      quickRemove();
    }
  }, 180);
}
