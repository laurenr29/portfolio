/**
 * LAUREN RAGLAND — PORTFOLIO APPLICATION LOGIC
 * Rebuilt for the clean, modern, and fun Google Brand Design Rebuild
 */

// Full Content Matrix of all 7 Case Studies
const CASE_STUDY_DATA = {
  "usbank": {
    "title": "Financial ecosystem & mobile banking content architecture",
    "client": "U.S. Bank",
    "role": "Lead Content Strategist",
    "focus": "Financial UX, mobile banking, trust architecture",
    "deliverables": [
      "Content strategy & audits",
      "Global alignments",
      "Competitive research",
      "SEO API Feed integration"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/ebd7cba6-3ac6-4653-82a4-acfc45f95d77/Screenshot+2025-09-24+at+4.12.36%E2%80%AFPM.png?format=1000w",
    "overview": "Led content strategy and copy architecture to overhaul the digital branch locator and specialist scheduling workflows across mobile and web banking channels.",
    "sections": [
      {
        "type": "heading",
        "text": "The Project Context"
      },
      {
        "type": "ui_card",
        "label": "My Role",
        "text": "Lead Content Strategist. Managed competitive audits, concept design, copy creation, accessibility standards, and SEO coordination across visual designer, experience architect, product owner, and developer cohorts."
      },
      {
        "type": "heading",
        "text": "Current State & Core Problem"
      },
      {
        "type": "ui_card",
        "label": "User Pain Points",
        "text": "1. Branch locator content lacked consistent POV and information parity.<br>2. Locator filters were not comprehensive.<br>3. Users were confused by scheduling terminology.<br>4. Navigation was cluttered with too many separate screens."
      },
      {
        "type": "heading",
        "text": "Strategic Solutions"
      },
      {
        "type": "ui_card",
        "label": "Solution 1: Above the Fold Hierarchy",
        "text": "Placed primary locator pathways above the fold. Grouped features into three simple categories ordered by actual customer usage priorities."
      },
      {
        "type": "ui_card",
        "label": "Solution 2: Filters & Map Optimization",
        "text": "Standardized location details. Designed a clean map pin layout with bank names aligned directly under selected pins, meeting accessibility standards."
      }
    ],
    "nextId": "verizon",
    "nextTitle": "Simplicity & 3.0 Brand Overhaul"
  },
  "verizon": {
    "title": "Simplicity & 3.0 brand overhaul",
    "client": "Verizon Mobile",
    "role": "Sr. Content Strategist",
    "focus": "Mobile app UX, extreme simplicity, digital perks",
    "deliverables": [
      "3.0 style guidelines",
      "Perks integration matrix",
      "Checkout flow microcopy",
      "Jira defect tracking"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/74c5d73c-4480-42da-8bcc-ccf2c4ce85f6/Screenshot+2023-08-10+at+5.04.23+PM.png?format=1000w",
    "overview": "Overhauled transactional flow copy and onboarding microcopy for My Verizon App under a strict \"Extreme Simplicity\" mandate to deliver minimal words for maximum user comprehension.",
    "sections": [
      {
        "type": "heading",
        "text": "The Challenge"
      },
      {
        "type": "ui_card",
        "label": "Problem",
        "text": "Users were overwhelmed when choosing phone plans. Tiles were copy-heavy and the value of included digital rewards was unclear."
      },
      {
        "type": "heading",
        "text": "Content Execution"
      },
      {
        "type": "ui_card",
        "label": "Extreme Simplicity Copywriting",
        "text": "Drastically reduced card copy. Designed a structured progressive disclosure layout displaying only essential pricing and rewards info first."
      },
      {
        "type": "ui_card",
        "label": "Perks Integration",
        "text": "Coordinated compliance matrices with legal, marketing, and SEO teams to cleanly integrate third-party rewards (e.g. Disney+, Apple One) into checkout tiles."
      }
    ],
    "nextId": "verizon1",
    "nextTitle": "Global Design System Alignment"
  },
  "verizon1": {
    "title": "Global design system alignment",
    "client": "Verizon Fios",
    "role": "Sr. UX Writer",
    "focus": "Home broadband UX, design systems, style guide alignment",
    "deliverables": [
      "Voice & Tone systems",
      "Global copy elements",
      "Cross-functional sprint guides",
      "UX audits"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/73d74c2d-4dd0-482a-8bcc-ccf2c4ce85f6/fios-hero.png?format=1000w",
    "overview": "Aligned UX copy and transactional frameworks across home broadband, fiber optics, and digital television plan options for millions of active Verizon Fios accounts.",
    "sections": [
      {
        "type": "heading",
        "text": "Alignment Architecture"
      },
      {
        "type": "ui_card",
        "label": "The Task",
        "text": "Managed copy inconsistencies between legacy Fios portal structures and the modern mobile app layouts. Standardized terms for speeds, data caps, and installation processes."
      },
      {
        "type": "ui_card",
        "label": "Design System Integration",
        "text": "Authored standard reusable strings and error states for Fios modules in the centralized Verizon Design Library."
      }
    ],
    "nextId": "zillow",
    "nextTitle": "Leasing UX & Apartment Application Flows"
  },
  "zillow": {
    "title": "Leasing UX & apartment application flows",
    "client": "Zillow Group",
    "role": "Senior UX Writer",
    "focus": "Leasing workflows, application portals, credit check security",
    "deliverables": [
      "Renter application copy",
      "Background check security details",
      "Landlord review widgets",
      "Responsive mobile screens"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/bdc142a9-c6dd-4af0-853c-3c1320684274/0-1.png?format=1000w",
    "overview": "Designed leasing journeys, credit verification flows, and background security checks to make rental applications secure and straightforward for renters and landlords.",
    "sections": [
      {
        "type": "heading",
        "text": "Strategic Copy Goals"
      },
      {
        "type": "ui_card",
        "label": "Reducing Renter Anxiety",
        "text": "Applying for apartments involves sensitive financial data. Authored reassuring microcopy explaining how credit reports are shared securely and why background fee metrics are required."
      },
      {
        "type": "ui_card",
        "label": "Mobile Application Usability",
        "text": "Designed multi-screen application forms optimized for mobile browsers, ensuring users can upload documents easily."
      }
    ],
    "nextId": "webmd",
    "nextTitle": "Empathetic Medical Feature Writing"
  },
  "webmd": {
    "title": "Empathetic medical feature writing",
    "client": "WebMD",
    "role": "Medical Copywriter & Feature Writer",
    "focus": "Health literacy, patient journeys, plain language translation",
    "deliverables": [
      "Patient case studies",
      "Symptom guide translations",
      "Medical advisory audits",
      "Therapeutic reviews"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/eb976ca9-c6df-4af0-853c-3c1320684274/webmd-hero.png?format=1000w",
    "overview": "Translated dense pharmaceutical details and treatment procedures into clear, accessible patient stories, advocating health literacy and plain language principles.",
    "sections": [
      {
        "type": "heading",
        "text": "Medical Content Simplification"
      },
      {
        "type": "ui_card",
        "label": "Plain Language Mandate",
        "text": "Translated dense medical descriptions (e.g. chronic inflammation, autoimmune conditions) into clear, compassionate articles that patients can comprehend easily."
      },
      {
        "type": "ui_card",
        "label": "User Journey Verification",
        "text": "Ensured that symptoms guides and diagnostic worksheets direct users safely to certified health professionals without triggering panic."
      }
    ],
    "nextId": "microsoft",
    "nextTitle": "Conversational Cloud Portfolio"
  },
  "microsoft": {
    "title": "Conversational cloud portfolio",
    "client": "Microsoft",
    "role": "UX Writer & Editor",
    "focus": "B2B SaaS, conversational onboarding, admin microcopy",
    "deliverables": [
      "Admin setup flows",
      "Cloud onboarding tutorials",
      "Command line help docs",
      "Localization tables"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/ec976ca9-c6df-4af0-853c-3c1320684274/microsoft-hero.png?format=1000w",
    "overview": "Architected conversational setup guides, cloud security onboarding tutorials, and localization systems for Microsoft Cloud & Enterprise platforms.",
    "sections": [
      {
        "type": "heading",
        "text": "B2B Content Strategy"
      },
      {
        "type": "ui_card",
        "label": "Simplifying IT Setup",
        "text": "Designed step-by-step guides for system administrators setting up enterprise directories, reducing setup duration and error logs."
      }
    ],
    "nextId": "homedepot",
    "nextTitle": "B2C Retail Cart & Checkout Flow"
  },
  "homedepot": {
    "title": "B2C retail cart & checkout flow",
    "client": "The Home Depot",
    "role": "Senior UX Writer",
    "focus": "E-commerce checkout, payment options, delivery tracking",
    "deliverables": [
      "Cart summary widgets",
      "Payment processing alerts",
      "Delivery tracking alerts",
      "A/B checkout copy testing"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/ed976ca9-c6df-4af0-853c-3c1320684274/homedepot-hero.png?format=1000w",
    "overview": "Optimized purchase cycles, payment options, and delivery tracking interfaces to reduce cart abandonment and increase conversion rates.",
    "sections": [
      {
        "type": "heading",
        "text": "Checkout Optimization"
      },
      {
        "type": "ui_card",
        "label": "Reducing Friction",
        "text": "Analyzed purchase points. Rewrote shipping selection copy and billing fields validation alerts, resulting in a measurable increase in transactions completed."
      }
    ],
    "nextId": "usbank",
    "nextTitle": "Financial Ecosystem & Mobile Banking"
  }
};

// Corporate Jargon Translation Dictionary
const JARGON_DICTIONARY = {
  "synergy": {
    "text": "We must leverage synergistic paradigms to facilitate cross-functional alignment.",
    "human": "We need to work together across teams so we stay aligned on the project goals.",
    "why": "Replaces vague buzzwords ('synergistic paradigms') with plain verbs, showing immediate value."
  },
  "disclosure": {
    "text": "Please execute comprehensive review of details prior to proceeding to subsequent screen.",
    "human": "Check your details before you continue.",
    "why": "Saves screen reader time and mental energy by cutting empty phrases from 12 words to 6."
  },
  "error": {
    "text": "System error 404: The query requested contains attributes which are currently unavailable.",
    "human": "We can't find that page right now. Let's get you back on track.",
    "why": "Transforms standard computer error logs into friendly, action-oriented guidance."
  },
  "perks": {
    "text": "Optimize monetized partner rewards packages by opting into premium tier reward networks.",
    "human": "Get the most out of your plan by choosing your rewards below.",
    "why": "Highlights what is actually in it for the user in plain terms."
  },
  "navigation": {
    "text": "Utilize the digital architectural orientation assets to orient yourself geographically.",
    "human": "Use the map to find a branch near you.",
    "why": "Replaces technical jargon ('digital architectural assets') with direct instruction."
  }
};

// DOM Cache
document.addEventListener("DOMContentLoaded", () => {
  // Navigation & Theme
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const rootElement = document.documentElement;

  // Search Engine Mockup
  const mainSearchInput = document.getElementById("main-search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const searchBtn = document.getElementById("search-btn");
  const luckyBtn = document.getElementById("lucky-btn");
  const searchResultsStats = document.getElementById("search-results-stats");
  const caseGrid = document.getElementById("case-grid");
  const caseCards = document.querySelectorAll(".case-card");

  // Jargon Translator
  const jargonSelect = document.getElementById("jargon-select");
  const jargonText = document.getElementById("jargon-text");
  const humanText = document.getElementById("human-text");
  const translationWhy = document.getElementById("translation-why");

  // Google Maps Pinboard
  const mapPins = document.querySelectorAll(".map-pin");
  const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
  const sidebarDetails = document.getElementById("sidebar-details");
  const mapDetailClient = document.getElementById("map-detail-client");
  const mapDetailTitle = document.getElementById("map-detail-title");
  const mapDetailDesc = document.getElementById("map-detail-desc");
  const mapDetailBullets = document.getElementById("map-detail-bullets");
  const mapDetailBtn = document.getElementById("map-detail-btn");

  // Google Keep Board
  const keepFilterBtns = document.querySelectorAll(".keep-filter-btn");
  const keepNotes = document.querySelectorAll(".keep-note");

  // Case Study modal
  const csModal = document.getElementById("case-study-modal");
  const modalClose = document.getElementById("modal-close");
  const modalBackdrop = document.getElementById("modal-backdrop");
  
  // Modal text caches
  const modalClientLabel = document.getElementById("modal-client-label");
  const modalTitle = document.getElementById("modal-title");
  const modalOverview = document.getElementById("modal-overview");
  const modalMetaClient = document.getElementById("modal-meta-client");
  const modalMetaRole = document.getElementById("modal-meta-role");
  const modalMetaFocus = document.getElementById("modal-meta-focus");
  const modalMetaDeliverables = document.getElementById("modal-meta-deliverables");
  const modalStoryFlow = document.getElementById("modal-story-flow");

  // Lightbox cache
  const imgLightbox = document.getElementById("img-lightbox");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");
  const lightboxZoomImg = document.getElementById("lightbox-zoom-img");

  /* ==========================================================================
     1. THEME TOGGLE
     ========================================================================== */
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = rootElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      rootElement.setAttribute("data-theme", nextTheme);
      themeToggleBtn.querySelector(".theme-label").textContent = nextTheme === "dark" ? "Light" : "Dark";
    });
  }

  /* ==========================================================================
     2. SEARCH HUB & RANDOM LUCKY MODE
     ========================================================================== */
  function filterProjects(query) {
    const cleanQuery = query.toLowerCase().trim();
    let visibleCount = 0;
    const startTime = performance.now();

    caseCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(cleanQuery)) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    const endTime = performance.now();
    const duration = ((endTime - startTime) / 1000).toFixed(3);

    if (query.length > 0) {
      searchClearBtn.style.display = "block";
      searchResultsStats.style.display = "block";
      searchResultsStats.textContent = `About ${visibleCount} results (${duration} seconds)`;
    } else {
      searchClearBtn.style.display = "none";
      searchResultsStats.style.display = "none";
    }
  }

  if (mainSearchInput) {
    mainSearchInput.addEventListener("input", (e) => {
      filterProjects(e.target.value);
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      mainSearchInput.value = "";
      filterProjects("");
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const targetSec = document.getElementById("projects-section");
      if (targetSec) targetSec.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (luckyBtn) {
    luckyBtn.addEventListener("click", () => {
      const ids = Object.keys(CASE_STUDY_DATA);
      const randomId = ids[Math.floor(Math.random() * ids.length)];
      
      luckyBtn.textContent = "Loading luck...";
      setTimeout(() => {
        luckyBtn.textContent = "I'm Feeling Lucky";
        openCaseStudyModal(randomId);
      }, 800);
    });
  }

  /* ==========================================================================
     3. JARGON TRANSLATOR WIDGET
     ========================================================================== */
  function updateJargonTranslation() {
    const key = jargonSelect.value;
    const entry = JARGON_DICTIONARY[key];
    if (!entry) return;

    jargonText.value = entry.text;
    humanText.value = "";
    translationWhy.textContent = "Decoding...";

    setTimeout(() => {
      humanText.value = entry.human;
      translationWhy.textContent = entry.why;
    }, 450);
  }

  if (jargonSelect) {
    jargonSelect.addEventListener("change", updateJargonTranslation);
    // Initialize default selection
    updateJargonTranslation();
  }

  /* ==========================================================================
     4. INTERACTIVE MAP PINBOARD
     ========================================================================== */
  mapPins.forEach(pin => {
    pin.addEventListener("click", () => {
      mapPins.forEach(p => p.classList.remove("selected"));
      pin.classList.add("selected");

      const caseId = pin.getAttribute("data-case");
      const data = CASE_STUDY_DATA[caseId];
      if (!data) return;

      sidebarPlaceholder.style.display = "none";
      sidebarDetails.style.display = "flex";

      mapDetailClient.textContent = data.client;
      mapDetailTitle.textContent = data.title;
      mapDetailDesc.textContent = data.overview;

      mapDetailBullets.innerHTML = "";
      data.deliverables.slice(0, 3).forEach(bullet => {
        const item = document.createElement("div");
        item.textContent = `• ${bullet}`;
        mapDetailBullets.appendChild(item);
      });

      mapDetailBtn.onclick = () => {
        openCaseStudyModal(caseId);
      };
    });
  });

  /* ==========================================================================
     5. KEEP STICKY NOTE BOARD
     ========================================================================== */
  keepFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      keepFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.getAttribute("data-category");
      keepNotes.forEach(note => {
        const noteCat = note.getAttribute("data-category");
        if (cat === "all" || noteCat === cat) {
          note.style.display = "flex";
        } else {
          note.style.display = "none";
        }
      });
    });
  });

  /* ==========================================================================
     6. CASE STUDY MODAL & STORY FLOW POPULATOR
     ========================================================================== */
  function openCaseStudyModal(caseId) {
    const data = CASE_STUDY_DATA[caseId];
    if (!data) return;

    modalClientLabel.textContent = data.client.toUpperCase();
    modalTitle.textContent = data.title;
    modalOverview.textContent = data.overview;
    modalMetaClient.textContent = data.client;
    modalMetaRole.textContent = data.role;
    modalMetaFocus.textContent = data.focus;

    // Deliverables
    modalMetaDeliverables.innerHTML = "";
    data.deliverables.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      modalMetaDeliverables.appendChild(li);
    });

    // Content Story Flow Section Builders
    modalStoryFlow.innerHTML = "";
    
    // Custom hardcoded editorial flow overrides (like US Bank branch locator)
    if (caseId === "usbank") {
      modalStoryFlow.innerHTML = `
        <div class="story-block no-image">
          <div class="cs-project-card">
            <div class="cs-project-header">Redesigning locator workflows for U.S. Bank</div>
            <div class="cs-project-grid">
              <div class="cs-project-col">
                <div class="cs-project-item"><h5>My Role</h5><p>Lead Content Strategist</p></div>
                <div class="cs-project-item"><h5>Collaborative Cohort</h5><p>Experience architects, visual designers, SEO specialist, researcher, accessibility consultant, product owners, and developers.</p></div>
              </div>
              <div class="cs-project-col">
                <div class="cs-project-item"><h5>Contributions</h5><p>Audit analysis, terminology alignment, navigation hierarchy specs, and executive presentations.</p></div>
                <div class="cs-project-item"><h5>Agile Tools</h5><p>Figma, Sketch, InVision Studio, Jira & Mural</p></div>
              </div>
            </div>
          </div>
        </div>

        <div class="story-block">
          <div class="story-text">
            <h3>Initial State & Pain Points</h3>
            <p>1. The mobile branch details screens lacked information parity with web platforms.</p>
            <p>2. Users were confused by what specialist appointments were offered at particular branch hubs.</p>
            <p>3. Text and headings lacked structural hierarchy.</p>
          </div>
          <div class="story-img-box zoomable-image" data-zoom="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f89d6738-c2fd-490d-bb1d-9d515305a751/Screenshot+2025-09-17+at+3.51.16%E2%80%AFPM.png?format=750w">
            <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f89d6738-c2fd-490d-bb1d-9d515305a751/Screenshot+2025-09-17+at+3.51.16%E2%80%AFPM.png?format=750w" alt="Branch details screen mockups">
          </div>
        </div>

        <div class="story-block">
          <div class="story-text">
            <h3>Unified Map Pin Board & Search</h3>
            <p>Conducted card sorting interviews to clean up filter tags. Placed active map pins side-by-side with clear, clean listings to meet screen reader requirements.</p>
          </div>
          <div class="story-img-box zoomable-image" data-zoom="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f59a402e-62c6-40de-adc5-0a3351633262/Screen+Shot+2022-05-05+at+6.23.13+PM.png?format=750w">
            <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f59a402e-62c6-40de-adc5-0a3351633262/Screen+Shot+2022-05-05+at+6.23.13+PM.png?format=750w" alt="Interactive search and location maps">
          </div>
        </div>
      `;
    } else {
      // General fallbacks for other case studies
      data.sections.forEach(sec => {
        if (sec.type === "heading") {
          const block = document.createElement("div");
          block.className = "story-block no-image";
          block.innerHTML = `<div class="story-text"><h3>${sec.text}</h3></div>`;
          modalStoryFlow.appendChild(block);
        } else if (sec.type === "ui_card") {
          const block = document.createElement("div");
          block.className = "story-block no-image";
          block.innerHTML = `
            <div class="cs-ui-card">
              <span class="meta-lbl">${sec.label || 'Details'}</span>
              <p>${sec.text}</p>
            </div>
          `;
          modalStoryFlow.appendChild(block);
        }
      });
    }

    csModal.classList.add("active");
    csModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeCaseStudyModal() {
    csModal.classList.remove("active");
    csModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (modalClose) modalClose.addEventListener("click", closeCaseStudyModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeCaseStudyModal);

  // Bind clickable cards
  const clickableCards = document.querySelectorAll(".clickable-card");
  clickableCards.forEach(card => {
    card.addEventListener("click", () => {
      const caseId = card.getAttribute("data-case");
      openCaseStudyModal(caseId);
    });
    // Keyboard navigation
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const caseId = card.getAttribute("data-case");
        openCaseStudyModal(caseId);
      }
    });
  });

  /* ==========================================================================
     7. IMAGE LIGHTBOX OVERLAY ZOOM
     ========================================================================== */
  document.addEventListener("click", (e) => {
    const zoomContainer = e.target.closest(".zoomable-image");
    if (zoomContainer) {
      const zoomImgSrc = zoomContainer.getAttribute("data-zoom");
      if (imgLightbox && lightboxZoomImg) {
        lightboxZoomImg.src = zoomImgSrc;
        imgLightbox.classList.add("active");
        imgLightbox.setAttribute("aria-hidden", "false");
      }
    }
  });

  function closeLightbox() {
    imgLightbox.classList.remove("active");
    imgLightbox.setAttribute("aria-hidden", "true");
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
});
