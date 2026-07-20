// assets/js/sections/skills-render.js
import { ScrollTrigger } from '../animations/gsap-init.js';

const SKILL_ICONS = {
  'PM & Agile': 'ph-duotone ph-kanban',
  'Frontend Dev': 'ph-duotone ph-layout',
  'Backend & DB': 'ph-duotone ph-database',
  'AI & Automation': 'ph-duotone ph-cpu',
  'DevOps & Tools': 'ph-duotone ph-terminal-window',
  'Design & Marketing': 'ph-duotone ph-palette'
};

export async function renderSkills() {
  const container = document.querySelector('.skills-grid');
  if (!container) return;

  const res = await fetch('/data/skills.json');
  const skills = await res.json();

  container.innerHTML = Object.entries(skills).map(([groupName, list]) => {
    const chipsHTML = list.map(s => `<span class="chip">${s}</span>`).join('');
    const iconClass = SKILL_ICONS[groupName] || 'ph-duotone ph-info';
    
    return `
      <div class="skills-group" data-group="${groupName}">
        <div class="skills-group__hdr" style="cursor: pointer;">
          <h3 class="skills-group__title">
            <i class="skills-group__icon ${iconClass}"></i>
            ${groupName}
          </h3>
          <button class="skills-group__trigger" aria-label="Toggle ${groupName} skills list" aria-expanded="true">
            <svg class="skills-group__chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>
          </button>
        </div>
        <div class="skills-group__body">
          <div class="skills-group__chips">
            ${chipsHTML}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach toggle behaviors
  container.querySelectorAll('.skills-group').forEach(group => {
    const trigger = group.querySelector('.skills-group__trigger');
    const header = group.querySelector('.skills-group__hdr');
    const body = group.querySelector('.skills-group__body');

    // Set initial maxHeight to allow fluid toggle
    body.style.maxHeight = `${body.scrollHeight}px`;

    const toggle = () => {
      const open = group.classList.toggle('open');
      const collapsed = !open;
      group.classList.toggle('collapsed', collapsed);
      
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.style.maxHeight = collapsed ? '0px' : `${body.scrollHeight}px`;

      // Refresh ScrollTrigger to update heights (timeout matches transition)
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);
    };

    header.addEventListener('click', toggle);
  });

  // Initialize interactive tech stack filter
  initTechStackBuilder();

  // Refresh ScrollTrigger to update heights after load
  ScrollTrigger.refresh();
}

function initTechStackBuilder() {
  const filterBtns = document.querySelectorAll('.stack-filter-btn');
  const badges = document.querySelectorAll('.skills-group .chip');
  const categoryCards = document.querySelectorAll('.skills-group');
  const resultText = document.getElementById('stack-result-text');

  if (filterBtns.length === 0) return;

  const stackMap = {
    'all': [],
    'web-app': ['Agile', 'Jira', 'Notion', 'React.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Tailwind CSS', 'Responsive Design', 'Vercel', 'Figma', 'UI/UX Design', 'Google Analytics 4', 'GitHub'],
    'ai-bot': ['Prompt Engineering', 'OpenAI API', 'Claude API', 'Botpress', 'LLM Integration', 'n8n', 'Make/Zapier', 'WhatsApp Automation', 'Git', 'GitHub', 'Docker (concepts)', 'Express.js', 'Node.js'],
    'healthtech': ['Agile', 'Jira', 'Notion', 'Risk Management', 'QA Governance', 'React.js', 'Node.js', 'MongoDB', 'Firebase', 'REST APIs', 'VPS Setup', 'UI/UX Design', 'SEO', 'Google Analytics 4'],
    'saas': ['Agile', 'Scrum', 'Kanban', 'Jira', 'Notion', 'Trello', 'Miro', 'Sprint Planning', 'Backlog Grooming', 'Risk Management', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs', 'Git', 'GitHub', 'Vercel', 'VPS Setup']
  };

  const stackResults = {
    'all': 'Viewing all tools across my full operational stack.',
    'web-app': 'Web App Stack → Figma for design, GitHub + Vercel for CI/CD, React + Tailwind for build logic.',
    'ai-bot': 'AI Bot & Flow Stack → Botpress for chat agents, n8n/Make for automations, Claude/OpenAI for LLM APIs.',
    'healthtech': 'HealthTech Staging Stack → Jira for HIPAA specs compliance, Node/MongoDB for secure records storage, VPS config.',
    'saas': 'SaaS Platform Stack → Agile sprints, React/Node code layers, Firebase user accounts sync, Vercel deployments.'
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const highlightedTools = stackMap[filter] || [];

      if (resultText) {
        resultText.style.opacity = '0';
        setTimeout(() => {
          resultText.innerText = stackResults[filter] || stackResults['all'];
          resultText.style.opacity = '1';
        }, 200);
      }

      if (filter === 'all') {
        badges.forEach(badge => {
          badge.style.opacity = '1';
          badge.classList.remove('chip--active');
        });
        categoryCards.forEach(card => {
          card.style.opacity = '1';
          // Ensure body scroll height is correct
          const body = card.querySelector('.skills-group__body');
          if (body && !card.classList.contains('collapsed')) {
            body.style.maxHeight = `${body.scrollHeight}px`;
          }
        });
        ScrollTrigger.refresh();
        return;
      }

      let activeCategories = new Set();
      badges.forEach(badge => {
        const toolName = badge.innerText.trim();
        if (highlightedTools.includes(toolName)) {
          badge.style.opacity = '1';
          badge.classList.add('chip--active');
          activeCategories.add(badge.closest('.skills-group'));
        } else {
          badge.style.opacity = '0.15';
          badge.classList.remove('chip--active');
        }
      });

      categoryCards.forEach(card => {
        const isActive = activeCategories.has(card);
        card.style.opacity = isActive ? '1' : '0.35';
        
        // Expand active categories dynamically to show highlighted chips
        const body = card.querySelector('.skills-group__body');
        if (body) {
          if (isActive) {
            body.style.maxHeight = `${body.scrollHeight}px`;
            card.classList.remove('collapsed');
          } else {
            // Keep collapsed or closed to clean layout if desired, but letting the opacity do the work is fine.
          }
        }
      });

      // Refresh ScrollTrigger to update layouts (timeout matches transition)
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);
    });
  });
}
