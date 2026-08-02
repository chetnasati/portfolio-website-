/**
 * Chetna Sati - Graphic & Web Designer Portfolio Script
 * Home Page & Project Detail Page Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set Current Year in Sidebar & Project Page Footer
  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById('currentYear');
  const projectYearFoot = document.getElementById('projectYearFoot');
  if (yearSpan) yearSpan.textContent = currentYear;
  if (projectYearFoot) projectYearFoot.textContent = currentYear;

  // Complete Project Data Structure for Reference-Style Layout
  const projectData = {
    p1: {
      title: 'Adventures Overland',
      subtitle: 'Created a set of high-impact expedition visual assets, large-format exhibition booths, and print collaterals.',
      year: '2024',
      scope: 'Graphic & Print Design',
      client: 'Adventures Overland',
      duration: '8 weeks',
      summary: 'Campaign graphics and high-altitude brand collateral created to support luxury overland expeditions across international routes.',
      challenge: 'Designing visual assets that communicate rugged adventure while preserving a premium luxury aesthetic across large physical displays.',
      solution: 'Built modular graphic systems featuring bold topographical motifs, resilient color palettes, and pre-press optimized print collateral.',
      email: 'chetnasati7@gmail.com',
      phone: '+91 9870638241',
      liveLink: 'https://www.linkedin.com/in/chetna-sati',
      images: {
        col1: ['assets/images/portrait.jpg', 'assets/images/sculpture.jpg'],
        col2: ['assets/images/metal_cap.jpg', 'assets/images/beige_studio.jpg']
      }
    },
    p2: {
      title: 'Songdew Music',
      subtitle: 'Designed end-to-end user interface design systems, interactive Figma prototypes, and artist social banners.',
      year: '2023',
      scope: 'UI/UX & Web Design',
      client: 'Songdew Media',
      duration: '6 weeks',
      summary: 'Digital interface and music streaming branding created for India\'s leading platform for independent musicians and indie creators.',
      challenge: 'Structuring complex music catalog discovery tools and event schedules into an intuitive, high-contrast digital streaming interface.',
      solution: 'Crafted custom dark-mode UI component systems, interactive Figma micro-interactions, and vibrant artist promotional templates.',
      email: 'chetnasati7@gmail.com',
      phone: '+91 9870638241',
      liveLink: 'https://www.linkedin.com/in/chetna-sati',
      images: {
        col1: ['assets/images/vase.jpg', 'assets/images/metal_cap.jpg'],
        col2: ['assets/images/portrait.jpg', 'assets/images/beige_studio.jpg']
      }
    },
    p3: {
      title: 'Intugine SaaS',
      subtitle: 'Refreshed corporate identity, created custom UI micro-animations, animated loading states, and explainer motion graphics.',
      year: '2023',
      scope: 'Motion & Identity',
      client: 'Intugine SaaS',
      duration: '5 weeks',
      summary: 'Rebranding initiative and motion design language for a leading IoT and real-time logistics supply chain telemetry platform.',
      challenge: 'Translating technical IoT telemetry data and complex logistics workflows into clean, digestible visual graphics and animations.',
      solution: 'Developed fluid vector loading sequences, isometric telemetry cards, and a unified brand identity style guide in After Effects.',
      email: 'chetnasati7@gmail.com',
      phone: '+91 9870638241',
      liveLink: 'https://www.linkedin.com/in/chetna-sati',
      images: {
        col1: ['assets/images/architecture.jpg', 'assets/images/beige_studio.jpg'],
        col2: ['assets/images/metal_cap.jpg', 'assets/images/sculpture.jpg']
      }
    },
    p4: {
      title: 'Trezi Campaigns',
      subtitle: 'Produced high-converting Instagram carousel ads, spatial VR explainer video reels, and social performance graphics.',
      year: '2024',
      scope: 'Video & Social Ads',
      client: 'Trezi VR Platform',
      duration: '4 weeks',
      summary: 'Multi-channel digital performance campaign tailored for architectural spatial computing and VR collaboration platform.',
      challenge: 'Demonstrating immersive 3D spatial VR walkthroughs and architectural design tools inside standard 2D social media feeds.',
      solution: 'Authored high-energy video edits, split-screen reel transitions, and structured multi-slide carousel ad graphics.',
      email: 'chetnasati7@gmail.com',
      phone: '+91 9870638241',
      liveLink: 'https://www.linkedin.com/in/chetna-sati',
      images: {
        col1: ['assets/images/motion.jpg', 'assets/images/portrait.jpg'],
        col2: ['assets/images/metal_cap.jpg', 'assets/images/sculpture.jpg']
      }
    },
    p5: {
      title: 'Pulse',
      subtitle: 'Created a set of campaign visuals and social graphics to support multiple marketing initiatives.',
      year: '2025',
      scope: 'Graphic Design',
      client: 'Pulse Agency',
      duration: '6 weeks',
      summary: 'Campaign graphics created to support multiple marketing initiatives for different clients.',
      challenge: 'Each campaign required unique visuals while maintaining a recognizable style.',
      solution: 'Built modular design assets that could be easily adapted without losing visual consistency.',
      email: 'chetnasati7@gmail.com',
      phone: '+91 9870638241',
      liveLink: 'https://www.linkedin.com/in/chetna-sati',
      images: {
        col1: ['assets/images/portrait.jpg', 'assets/images/sculpture.jpg'],
        col2: ['assets/images/metal_cap.jpg', 'assets/images/beige_studio.jpg']
      }
    }
  };

  // DOM Elements for Project Overlay
  const projectPageOverlay = document.getElementById('projectPageOverlay');
  const projectSidebar = document.getElementById('projectSidebar');
  const projectBackBtn = document.getElementById('projectBackBtn');
  const projectTitle = document.getElementById('projectTitle');
  const projectSubtitle = document.getElementById('projectSubtitle');
  const projectLiveBtn = document.getElementById('projectLiveBtn');
  const projectYear = document.getElementById('projectYear');
  const projectScope = document.getElementById('projectScope');
  const projectClient = document.getElementById('projectClient');
  const projectDuration = document.getElementById('projectDuration');
  const projectSummaryPara = document.getElementById('projectSummaryPara');
  const projectChallenge = document.getElementById('projectChallenge');
  const projectSolution = document.getElementById('projectSolution');
  const projectEmailLink = document.getElementById('projectEmailLink');
  const projectPhoneLink = document.getElementById('projectPhoneLink');
  const projectMediaGrid = document.getElementById('projectMediaGrid');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  /**
   * Open Full Project Page View
   */
  function openProjectPage(projectId, pushHistory = true) {
    const data = projectData[projectId] || projectData['p1'];
    if (!data) return;

    // Populate Sidebar Details
    if (projectTitle) projectTitle.textContent = data.title;
    if (projectSubtitle) projectSubtitle.textContent = data.subtitle;
    if (projectLiveBtn) projectLiveBtn.href = data.liveLink || '#';
    if (projectYear) projectYear.textContent = data.year;
    if (projectScope) projectScope.textContent = data.scope;
    if (projectClient) projectClient.textContent = data.client;
    if (projectDuration) projectDuration.textContent = data.duration;
    if (projectSummaryPara) projectSummaryPara.textContent = data.summary;
    if (projectChallenge) projectChallenge.textContent = data.challenge;
    if (projectSolution) projectSolution.textContent = data.solution;
    
    if (projectEmailLink) {
      projectEmailLink.textContent = data.email || 'chetnasati7@gmail.com';
      projectEmailLink.href = `mailto:${data.email || 'chetnasati7@gmail.com'}`;
    }
    if (projectPhoneLink) {
      projectPhoneLink.textContent = data.phone || '+91 9870638241';
      projectPhoneLink.href = `tel:${(data.phone || '').replace(/[^0-9+]/g, '')}`;
    }

    // Render Staggered 2-Column Media Grid
    if (projectMediaGrid && data.images) {
      projectMediaGrid.innerHTML = '';

      // Column 1
      const col1Div = document.createElement('div');
      col1Div.className = 'project-media-col';
      data.images.col1.forEach(imgSrc => {
        const card = document.createElement('div');
        card.className = 'project-media-card';
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = data.title;
        img.loading = 'lazy';
        card.appendChild(img);
        col1Div.appendChild(card);
      });

      // Column 2
      const col2Div = document.createElement('div');
      col2Div.className = 'project-media-col';
      data.images.col2.forEach(imgSrc => {
        const card = document.createElement('div');
        card.className = 'project-media-card';
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = data.title;
        img.loading = 'lazy';
        card.appendChild(img);
        col2Div.appendChild(card);
      });

      projectMediaGrid.appendChild(col1Div);
      projectMediaGrid.appendChild(col2Div);
    }

    // Reset Scroll Position
    if (projectSidebar) projectSidebar.scrollTop = 0;
    const galleryPanel = document.querySelector('.project-gallery-panel');
    if (galleryPanel) galleryPanel.scrollTop = 0;

    // Show Overlay
    if (projectPageOverlay) {
      projectPageOverlay.classList.add('active');
      projectPageOverlay.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';

    // Update URL hash for direct page linking
    if (pushHistory) {
      history.pushState({ page: 'project', projectId: projectId }, '', `#project-${projectId}`);
    }
  }

  /**
   * Close Project Page View & Return to Home
   */
  function closeProjectPage(pushHistory = true) {
    if (projectPageOverlay) {
      projectPageOverlay.classList.remove('active');
      projectPageOverlay.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';

    // Clear hash cleanly to connect back to Home
    if (pushHistory && window.location.hash) {
      history.pushState({ page: 'home' }, '', window.location.pathname + window.location.search);
    }
  }

  // Attach click listener to main portfolio gallery cards (Home Page -> Project Page)
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const projectId = item.getAttribute('data-project');
      if (projectId) {
        openProjectPage(projectId);
      }
    });
  });

  // Back button listener (Project Page -> Home Page)
  if (projectBackBtn) {
    projectBackBtn.addEventListener('click', () => {
      closeProjectPage(true);
    });
  }

  // Scroll to Top button listener inside Project Sidebar
  if (scrollTopBtn && projectSidebar) {
    scrollTopBtn.addEventListener('click', () => {
      projectSidebar.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Escape key closes project page and returns to Home
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectPageOverlay && projectPageOverlay.classList.contains('active')) {
      closeProjectPage(true);
    }
  });

  // Handle Browser Back / Forward buttons (Popstate navigation)
  window.addEventListener('popstate', () => {
    if (window.location.hash && window.location.hash.startsWith('#project-')) {
      const pId = window.location.hash.replace('#project-', '');
      openProjectPage(pId, false);
    } else {
      closeProjectPage(false);
    }
  });

  // Check URL Hash on Initial Load for Direct Deep Linking
  if (window.location.hash && window.location.hash.startsWith('#project-')) {
    const pId = window.location.hash.replace('#project-', '');
    if (projectData[pId]) {
      openProjectPage(pId, false);
    }
  }

  // Mobile Floating Segmented Toggle (About / Work)
  const tabAbout = document.getElementById('tabAbout');
  const tabWork = document.getElementById('tabWork');
  const sidebarEl = document.getElementById('sidebar');
  const galleryContainerEl = document.querySelector('.gallery-container');

  if (tabAbout && tabWork && sidebarEl && galleryContainerEl) {
    tabAbout.addEventListener('click', () => {
      tabAbout.classList.add('active');
      tabWork.classList.remove('active');
      sidebarEl.scrollIntoView({ behavior: 'smooth' });
    });

    tabWork.addEventListener('click', () => {
      tabWork.classList.add('active');
      tabAbout.classList.remove('active');
      galleryContainerEl.scrollIntoView({ behavior: 'smooth' });
    });

    // Update active tab automatically on scroll in mobile view
    window.addEventListener('scroll', () => {
      if (window.innerWidth <= 1024) {
        const galleryTop = galleryContainerEl.getBoundingClientRect().top;
        if (galleryTop <= window.innerHeight * 0.45) {
          tabWork.classList.add('active');
          tabAbout.classList.remove('active');
        } else {
          tabAbout.classList.add('active');
          tabWork.classList.remove('active');
        }
      }
    }, { passive: true });
  }
});

/**
 * Copy text to clipboard and trigger toast
 */
function copyContact(text, message) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || 'Copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  showToast(message || 'Copied to clipboard!');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 2500);
}
