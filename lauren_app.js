/**
 * LAUREN RAGLAND — PORTFOLIO APPLICATION LOGIC
 * Editorial Gallery Architecture & Deep-Dive Case Study Viewer
 * Google Aurora Design System & Inline Image-Copy Alignment
 */

const CASE_STUDY_DATA = {
  "usbank": {
    "title": "Financial ecosystem & mobile banking content architecture",
    "client": "U.S. Bank",
    "role": "Lead Content Strategist",
    "focus": "Financial UX, content strategy, mobile banking, trust architecture",
    "deliverables": [
      "Content strategy & audits",
      "Global alignments",
      "Competitive research",
      "Executive leadership"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/ebd7cba6-3ac6-4653-82a4-acfc45f95d77/Screenshot+2025-09-24+at+4.12.36%E2%80%AFPM.png?format=1000w",
    "overview": "Led UX content strategy across mobile banking and account management workflows. Conducted competitive research, ideation, copy creation, and global alignment to build intuitive financial experiences.",
    "sections": [
      {
        "type": "heading",
        "text": "The project:"
      },
      {
        "type": "paragraph",
        "text": "My role: Lead content strategist"
      },
      {
        "type": "paragraph",
        "text": "The team: Visual interaction designer, content strategist, experience architect, SEO specialist, researcher, product owner, scrum master, accessibility consultant & developers."
      },
      {
        "type": "paragraph",
        "text": "Key contributions: Competitive and research analyses, ideating and concepting, content strategy, copy creation, project tracking, global alignment, synthesizing stakeholder feedback & presenting to leadership."
      },
      {
        "type": "paragraph",
        "text": "Tools: Figma, Sketch, InVision Studio, Jira & Mural"
      },
      {
        "type": "heading",
        "text": "Current state & problem"
      },
      {
        "type": "ui_card",
        "label": "",
        "text": "<ol class=\"card-list-spaced\"><li>The content lacks a consistent POV and parity.</li><li>The filters are not comprehensive.</li><li>Tone and voice are outdated.</li><li>There are too many screens.</li></ol>"
      },
      {
        "type": "heading",
        "text": "Pain points"
      },
      {
        "type": "ui_card",
        "label": "",
        "text": "<ul class=\"card-list-spaced\"><li>Lack of understanding around the \u2018make an appointment\u2019 flow</li><li>Unsure of what\u2019s offered at the bank</li><li>Unsure of ways to bank</li><li>Unsure of how to access products</li></ul>"
      },
      {
        "type": "heading",
        "text": "Content goals"
      },
      {
        "type": "ui_card",
        "label": "",
        "text": "<ul class=\"card-list-spaced\"><li>Allow users to move freely through the experience, finding what they want, when they want it.</li><li>Educate users on what it means to be a valued U.S. Bank customer.</li><li>Utilize our Google API feed and increase organic SEO search value.</li><li>Meet user expectations while directly addressing core business needs.</li></ul>"
      },
      {
        "type": "heading",
        "text": "Landing page"
      },
      {
        "type": "ui_card",
        "label": "Solution 1",
        "text": "\u2022 Ways to bank above the fold<br>\u2022 Educational<br>\u2022 Streamlined"
      },
      {
        "type": "ui_card",
        "label": "Solution 1I",
        "text": "\u2022 1. Three simple categories<br>\u2022 2. Ordered by users\u2019 priorities<br>\u2022 3. All the information, but not all at once"
      },
      {
        "type": "ui_card",
        "label": "Why it matters",
        "text": "\u2022 Accessibility needs met through text links and copy placement.<br>\u2022 Business needs met through placement and text for financial specialists.<br>\u2022 Digital needs met through educational copy for the mobile app.<br>\u2022 SEO needs met through FAQs and relevant google terms."
      },
      {
        "type": "heading",
        "text": "Filters & Map"
      },
      {
        "type": "ui_card",
        "label": "",
        "text": "Names for filters came from research using card sorting and interviews. The map meets accessibility standards with numbered pins and bank names under the selected pins."
      },
      {
        "type": "heading",
        "text": "The branch details page"
      },
      {
        "type": "ui_card",
        "label": "",
        "text": "Find what you need when you want it. Search. Learn. Take action."
      }
    ],
    "images": [
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f89d6738-c2fd-490d-bb1d-9d515305a751/Screenshot+2025-09-17+at+3.51.16%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/6d158984-dda3-4150-bbc1-dde5eefc510f/Screenshot+2025-09-17+at+3.51.56%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f59a402e-62c6-40de-adc5-0a3351633262/Screen+Shot+2022-05-05+at+6.23.13+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/28eaf7fb-4260-448c-9a55-abd050708390/Screen+Shot+2022-05-05+at+6.23.28+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/58168358-2c83-4231-9e84-f9f077fba113/Screen+Shot+2022-03-17+at+2.41.51+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/fa80e2a2-7da2-4366-a164-3df5b3360885/Screen+Shot+2022-04-13+at+10.14.40+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/b7ee5aa7-84b2-46d1-820a-e74cce8401a8/Screenshot+2025-10-02+at+5.05.22%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/bdc142a9-c6dd-4af0-853c-3c1320684274/0-1.png?format=750w"
    ],
    "nextId": "verizon",
    "nextTitle": "Extreme simplicity & 3.0 brand guidelines overhaul"
  },
  "verizon": {
    "title": "Extreme simplicity & 3.0 brand guidelines overhaul",
    "client": "Verizon Mobile",
    "role": "Sr. Content Strategist",
    "focus": "Mobile app UX, extreme simplicity, progressive disclosure, digital perks",
    "deliverables": [
      "3.0 style guidelines",
      "Perks integration",
      "Cross-functional matrices",
      "Checkout optimization"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/74c5d73c-4480-42da-8bcc-ccf2c4ce85f6/Screenshot+2023-08-10+at+5.04.23+PM.png?format=1000w",
    "overview": "Overhauled mobile and home account flows under the core mandate of \"Extreme Simplicity\"\u2014delivering only the bare minimum words required for the greatest user impact while integrating third-party partner perks.",
    "sections": [
      {
        "type": "heading",
        "text": "The project:"
      },
      {
        "type": "paragraph",
        "text": "My role: Sr. Content Strategist"
      },
      {
        "type": "paragraph",
        "text": "Key contributions: Wrote microcopy, synthesized macro content requirements from cross-functional teams, ensured consistency & accuracy, created & managed content matrices, managed & track updates & defects."
      },
      {
        "type": "paragraph",
        "text": "Tools: Figma, Jira & Google sheets"
      },
      {
        "type": "heading",
        "text": "Current state & problem"
      },
      {
        "type": "paragraph",
        "text": "1. Users were overwhelmed with their plan choices."
      },
      {
        "type": "paragraph",
        "text": "2. The plan selection tiles were copy heavy."
      },
      {
        "type": "paragraph",
        "text": "3. There was a lack of clarity on what users actually get with each plan."
      },
      {
        "type": "heading",
        "text": "Content goals"
      },
      {
        "type": "paragraph",
        "text": "To create copy that captures extreme simplicity\u2013 only the bare minimum with the greatest impact."
      },
      {
        "type": "paragraph",
        "text": "Update copy per our 3.0 style guidelines."
      },
      {
        "type": "paragraph",
        "text": "Easily integrate the perks, optimizing our 3rd party relationships, into the buying experience."
      },
      {
        "type": "heading",
        "text": "Content strategy work"
      },
      {
        "type": "paragraph",
        "text": "Wrote navigational copy"
      },
      {
        "type": "paragraph",
        "text": "Developed copy and managed content matrix for product, legal, marketing & SEO content"
      },
      {
        "type": "paragraph",
        "text": "Developed new copy based on research and leadership needs"
      },
      {
        "type": "heading",
        "text": "Entry to buy flow for popular plans & build your own plan"
      },
      {
        "type": "heading",
        "text": "Add perks"
      },
      {
        "type": "heading",
        "text": "Manage perks"
      }
    ],
    "images": [
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/74c5d73c-4480-42da-8bcc-ccf2c4ce85f6/Screenshot+2023-08-10+at+5.04.23+PM.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/8c8ae780-01cd-421d-b09e-5ca4d172598e/Screenshot+2024-07-23+at+1.53.23%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/74c5d73c-4480-42da-8bcc-ccf2c4ce85f6/Screenshot+2023-08-10+at+5.04.23+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/aa2fc291-d065-425e-a50c-f248b0f40e9c/Screenshot+2024-07-23+at+8.06.53%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/5409b1f8-ab48-44cb-963c-5daf74826f92/Screenshot+2024-07-23+at+8.07.13%E2%80%AFPM.png?format=750w"
    ],
    "nextId": "verizon1",
    "nextTitle": "Fios account dashboard & integrated view architecture"
  },
  "verizon1": {
    "title": "Fios account dashboard & integrated view architecture",
    "client": "Verizon Fios",
    "role": "Sr. Content Strategist",
    "focus": "Fios dashboard UX, integrated view architecture, moderated testing, content matrices",
    "deliverables": [
      "Account dashboard copy",
      "Moderated subhead testing",
      "Cross-functional matrices",
      "Omnichannel parity"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/56968c21-661e-49a4-b9ac-85a50bb7242f/Screenshot+2025-06-27+at+12.35.07%E2%80%AFPM.png?format=1000w",
    "overview": "Overhauled the Fios user account dashboard from a copy-heavy billing document into an engaging, integrated ecosystem. Conducted moderated testing on greeting subheads and built cross-functional content matrices.",
    "sections": [
      {
        "type": "heading",
        "text": "The project:"
      },
      {
        "type": "paragraph",
        "text": "My role: Sr. Content Strategist"
      },
      {
        "type": "paragraph",
        "text": "Key contributions: Wrote micro, navigational & descriptive copy, created & managed content matrices, managed & track updates & defects."
      },
      {
        "type": "paragraph",
        "text": "Tools: Figma, Jira & Google sheets"
      },
      {
        "type": "heading",
        "text": "Current state & problem"
      },
      {
        "type": "paragraph",
        "text": "Dashboard reads like a bill."
      },
      {
        "type": "paragraph",
        "text": "Language is not engaging and lacks direction."
      },
      {
        "type": "paragraph",
        "text": "Inconsistencies across experiences."
      },
      {
        "type": "paragraph",
        "text": "Align copy to our new brand guidelines."
      },
      {
        "type": "paragraph",
        "text": "Integrate new functionality with educational language. Make the visuals & data make sense at first glance."
      },
      {
        "type": "paragraph",
        "text": "Create parity between both mobile & home account owners."
      },
      {
        "type": "heading",
        "text": "Content goals"
      },
      {
        "type": "heading",
        "text": "Refreshed user account dashboard for Fios"
      },
      {
        "type": "paragraph",
        "text": "Addresses all types of Verizon customers."
      },
      {
        "type": "paragraph",
        "text": "Brings the depth of a paper bill,  account metrics, equipment & additional services into one view."
      },
      {
        "type": "heading",
        "text": "One integrated view"
      },
      {
        "type": "paragraph",
        "text": "Moderated testing on a multitude of greeting subheads. Created final matrix to be used for development."
      },
      {
        "type": "paragraph",
        "text": "Collaborated with designers on how the data should be presented and communicated."
      },
      {
        "type": "paragraph",
        "text": "Wrote descriptive copy for all of the sections."
      },
      {
        "type": "paragraph",
        "text": "Created matrix of copy to be used for various test cases."
      },
      {
        "type": "heading",
        "text": "Additional content work"
      },
      {
        "type": "heading",
        "text": "Data usage category"
      }
    ],
    "images": [
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/56968c21-661e-49a4-b9ac-85a50bb7242f/Screenshot+2025-06-27+at+12.35.07%E2%80%AFPM.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/56968c21-661e-49a4-b9ac-85a50bb7242f/Screenshot+2025-06-27+at+12.35.07%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/3335f113-0101-45ac-a3ad-53dd19ad740f/Screenshot+2025-06-27+at+12.36.08%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/56a02a01-f4e0-435b-948b-b50b73dc4f4f/Screenshot+2025-06-27+at+12.37.46%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/2010209d-3ec3-4a43-be9f-57f9aff60f6f/Screenshot+2025-06-25+at+1.41.50%E2%80%AFPM.png?format=750w"
    ],
    "nextId": "zillow",
    "nextTitle": "Zillow Rental Manager (ZRM) ecosystem & leasing UX"
  },
  "zillow": {
    "title": "Zillow Rental Manager (ZRM) ecosystem & leasing UX",
    "client": "Zillow",
    "role": "Sr. Content Strategist",
    "focus": "Rental management, two-sided marketplace UX, listing workflows, freemium analytics",
    "deliverables": [
      "Freemium analytics copy",
      "Two-sided tone balance",
      "Listing creation flows",
      "User testing synthesis"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/6e4180aa-4807-424f-a1cb-7b09934e3939/Screen+Shot+2022-05-05+at+1.50.13+PM.png?format=1000w",
    "overview": "Drove UX content strategy and information architecture for Zillow Rental Manager (ZRM). Empowered landlords and renters with streamlined digital tools for listing creation, tenant screening, and leasing analytics.",
    "sections": [
      {
        "type": "heading",
        "text": "The Project:"
      },
      {
        "type": "paragraph",
        "text": "My role: Sr. Content Strategist"
      },
      {
        "type": "paragraph",
        "text": "The team: Product designer, content strategist, researcher, project manager & scrum master"
      },
      {
        "type": "paragraph",
        "text": "Key contributions: \u00a0Ideating and concepting, content strategy, copy logic and development, synthesizing user testing feedback, reiterating & revision."
      },
      {
        "type": "paragraph",
        "text": "Tools: Figma, Miro, Jira & User Zoom"
      },
      {
        "type": "heading",
        "text": "Current state & problem"
      },
      {
        "type": "paragraph",
        "text": "The Freemium analytics modules lacks relevant content or a point of view."
      },
      {
        "type": "paragraph",
        "text": "Valuable data lacks relevance to the user."
      },
      {
        "type": "paragraph",
        "text": "Copy lacks conversational & engaging tone."
      },
      {
        "type": "paragraph",
        "text": "Content lacks hierarchy."
      },
      {
        "type": "heading",
        "text": "Content design results"
      },
      {
        "type": "paragraph",
        "text": "A strategy that pulls together valuable data into one overarching theme and addresses the many variations of the analytics modules."
      },
      {
        "type": "paragraph",
        "text": "\u201cI\u2019ve above average inquires,"
      },
      {
        "type": "paragraph",
        "text": "but how do I get renters to take the next step?\u201d"
      },
      {
        "type": "heading",
        "text": "Pain points"
      },
      {
        "type": "paragraph",
        "text": "Help landlords understand the data in the modules and why it\u2019s valuable to them."
      },
      {
        "type": "paragraph",
        "text": "Provide landlords with actionable steps."
      },
      {
        "type": "paragraph",
        "text": "Tie all the modules together on the page."
      },
      {
        "type": "paragraph",
        "text": "Find a balance between being broad yet specific enough to drive actionable results."
      },
      {
        "type": "heading",
        "text": "Content goals"
      },
      {
        "type": "paragraph",
        "text": "Based on research, users didn\u2019t know how to interpret the data and visuals."
      },
      {
        "type": "paragraph",
        "text": "The language is inconsistent and lacks relevancy."
      },
      {
        "type": "heading",
        "text": "Results Page"
      },
      {
        "type": "heading",
        "text": "Pricing strategy"
      },
      {
        "type": "heading",
        "text": "Listing popularity"
      },
      {
        "type": "heading",
        "text": "Local market"
      },
      {
        "type": "paragraph",
        "text": "\u201cHow do I meet renters\u2019 expectations beyond pricing.\u201d"
      },
      {
        "type": "paragraph",
        "text": "I took a multi-pronged approach to the content. Within each module, I created three different types of content sections: the question, the data and the CTAs. Every module fell into one of three scenarios: above average ("
      },
      {
        "type": "paragraph",
        "text": "The question gets the landlord\u2019s attention at first glance. For instance, \u2018How well do you know renters in Seattle?\u2019 It also functions as a lead-in to the data."
      },
      {
        "type": "paragraph",
        "text": "The language captures what\u2019s in the visuals."
      },
      {
        "type": "paragraph",
        "text": "The CTAs strengthen the significance of the data, illuminating to landlords how the data can impact their next steps."
      },
      {
        "type": "heading",
        "text": "Solution"
      },
      {
        "type": "heading",
        "text": "Customer impact"
      },
      {
        "type": "paragraph",
        "text": "An experience that provides insights into landlords\u2019 listings, their market and their potential renters. Freemium empowers landlords with real-time knowledge that allows them to make educated decisions and fill their vacancies quicker."
      },
      {
        "type": "heading",
        "text": "Business bottomline"
      },
      {
        "type": "paragraph",
        "text": "Customer retention and an increase in premium Zillow rental manager accounts."
      }
    ],
    "images": [
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/6e4180aa-4807-424f-a1cb-7b09934e3939/Screen+Shot+2022-05-05+at+1.50.13+PM.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/6e4180aa-4807-424f-a1cb-7b09934e3939/Screen+Shot+2022-05-05+at+1.50.13+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/8f10a5bf-1dd9-4666-bb19-878e5a5fdeee/Advanced+Analytics+copy.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f59abd5a-0549-470a-91b9-20652ea6a0c7/Screen+Shot+2022-05-05+at+2.08.23+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/9350511f-187a-4ec8-80dd-edd6a90cfd8a/Screenshot+2025-10-02+at+3.10.40%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/d03d75a6-1070-4aa0-8792-ae4ee9889e76/Screenshot+2025-10-02+at+2.56.53%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/e36eb649-c1f5-4ce6-9768-a99f2424b211/Screen+Shot+2022-05-05+at+2.08.14+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f98459aa-fe71-4fe0-91ea-10c4b65c9a28/Screen+Shot+2022-07-12+at+3.24.53+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/5952f6a6-91ee-429a-8bb2-07b274823529/Screen+Shot+2022-07-12+at+3.30.29+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/fcb55af0-c180-450d-a3ef-b14fc0b3808a/Advanced+Analytics.png?format=750w"
    ],
    "nextId": "microsoft",
    "nextTitle": "Cloud portfolio & global campaign content strategy"
  },
  "microsoft": {
    "title": "Cloud portfolio & global campaign content strategy",
    "client": "Microsoft",
    "role": "Sr. UX Content Designer",
    "focus": "Cloud portfolio, enterprise voice, email nurture workflows, SEO architecture",
    "deliverables": [
      "Cloud portfolio copy",
      "Global email workflows",
      "SEO technical articles",
      "Marketing collateral"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1759761755668-OMSYK808CNS3OL1S9TEM/Screenshot%2B2025-09-30%2Bat%2B3.46.06%25E2%2580%25AFPM.png?format=1000w",
    "overview": "Wrote, rewrote, and edited copy across Microsoft's vast cloud computing portfolio. Created high-converting email nurture workflows, SEO articles, and marketing collateral supporting global enterprise campaigns.",
    "sections": [
      {
        "type": "heading",
        "text": "My role:"
      },
      {
        "type": "paragraph",
        "text": "The work: Wrote, rewrote, and edited copy across Microsoft\u2019s cloud portfolio. Included emails, SEO articles, and marketing collateral to support global campaigns."
      },
      {
        "type": "paragraph",
        "text": "The process: Research"
      },
      {
        "type": "paragraph",
        "text": "Product emails to existing customers"
      },
      {
        "type": "paragraph",
        "text": "SEO"
      }
    ],
    "images": [
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1759761755668-OMSYK808CNS3OL1S9TEM/Screenshot%2B2025-09-30%2Bat%2B3.46.06%25E2%2580%25AFPM.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/2674be19-840f-4563-8725-b3e6f8ba20ae/Mastering+Endpoint+Strategies+-+gated+landing+page+v2+-+GCS+12731+%281%29.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/331d30a2-6415-4302-b1b5-bd711b505f19/Nurture+Mail+-+A+Secure+Foundation.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1866d9c0-d018-4c46-9f33-e151868f105d/Securing+Today%27s+Workplace+-+promo+email+-+GCS+12649.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/bfa2aa97-cf4e-4a47-8f8b-3797b96c0459/0.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1759761755668-OMSYK808CNS3OL1S9TEM/Screenshot%2B2025-09-30%2Bat%2B3.46.06%25E2%2580%25AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f87e11e3-730a-4447-ba95-cb005cc5a68c/Screenshot+2025-09-30+at+3.46.45%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1487fe68-fed6-4fc3-b346-5734526d01d4/Screenshot+2025-09-30+at+3.49.08%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/b5edeeb1-88a4-499d-a51c-b8844fbd6854/Screenshot+2025-09-30+at+3.49.24%E2%80%AFPM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/b2b49954-93cd-4388-9fea-7b9881ffa64e/Screenshot+2025-09-30+at+3.49.49%E2%80%AFPM.png?format=750w"
    ],
    "nextId": "webmd",
    "nextTitle": "Human-centric medical journalism & feature reporting"
  },
  "webmd": {
    "title": "Catalog storytelling & style guide architecture",
    "client": "WebMD",
    "role": "Medical Feature Writer",
    "focus": "Health literacy, patient interviews, diagnostic translation, medical journalism",
    "deliverables": [
      "First-person features",
      "Patient & expert interviews",
      "Diagnostic guides",
      "Health literacy standards"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1759327444967-CC67YJVHZTE7T8JMZIFA/Screenshot%2B2025-10-01%2Bat%2B9.35.29%25E2%2580%25AFAM.png?format=1000w",
    "overview": "Sourced and interviewed patients and medical experts for compelling first-person feature stories. Translated complex clinical diagnostics into clear, reassuring, and high-engagement health reporting for diverse audiences.",
    "sections": [
      {
        "type": "heading",
        "text": "My role:"
      },
      {
        "type": "paragraph",
        "text": "The work: Wrote high-quality, engaging, human interest stories in a variety of formats."
      },
      {
        "type": "paragraph",
        "text": "The process: Sourced and interviewed patients and medical experts for first-person feature stories; researched and reported medically accurate content; turned complex topics into clear and interesting  pieces for a variety of audiences."
      },
      {
        "type": "paragraph",
        "text": "Feature stories & medical articles"
      }
    ],
    "images": [
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1759327444967-CC67YJVHZTE7T8JMZIFA/Screenshot%2B2025-10-01%2Bat%2B9.35.29%25E2%2580%25AFAM.png?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1759327444967-CC67YJVHZTE7T8JMZIFA/Screenshot%2B2025-10-01%2Bat%2B9.35.29%25E2%2580%25AFAM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/441366b8-a341-4b58-a336-2f3bf4a78304/Screenshot+2025-10-01+at+10.10.43%E2%80%AFAM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/df58dd48-9a8c-4e69-adcc-5ffbaa1e43ba/Screenshot+2025-10-01+at+10.11.42%E2%80%AFAM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/876f4e87-dfed-4873-a1bb-2b9ac1be8305/Screenshot+2025-10-01+at+10.12.30%E2%80%AFAM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/058fd162-1d81-446d-87b2-826ad868decf/Screenshot+2025-10-01+at+10.13.49%E2%80%AFAM.png?format=750w"
    ],
    "nextId": "homedepot",
    "nextTitle": "Catalog storytelling & style guide architecture"
  },
  "homedepot": {
    "title": "Catalog storytelling & style guide architecture",
    "client": "The Home Depot & Brands",
    "role": "Sr. Copy Editor & SME",
    "focus": "Omnichannel storytelling, style guide creation, editorial leadership, print & digital",
    "deliverables": [
      "Definitive brand style guides",
      "Seasonal catalog stories",
      "MyHealthMart architecture",
      "HBO historical accuracy"
    ],
    "img": "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1655129671205-WN9W4GM3BXXAD1S88FVA/51ZCLqorG6L.jpg?format=1000w",
    "overview": "Served as Senior Copy Editor for print and digital catalogs at The Home Depot, authored definitive brand style guides, led content architecture for 300+ page healthcare portals, and edited historically accurate TV scripts at HBO.",
    "sections": [
      {
        "type": "heading",
        "text": "It\u2019s thrilling to edit a"
      },
      {
        "type": "heading",
        "text": "sentence to its strongest form,"
      },
      {
        "type": "heading",
        "text": "an idea to its truest expression."
      },
      {
        "type": "heading",
        "text": "Sr. Copy Editor at the Home Depot"
      },
      {
        "type": "paragraph",
        "text": "I served as the sr. copy editor for the print and digital issues of the Home Decorator\u2019s Collection catalog for the Home Depot. Working closely with the design director, I was instrumental in developing stories for each catalog. Additionally, I developed the style guide and served as its subject matter expert."
      },
      {
        "type": "heading",
        "text": "Editor and Content Specialist for MyHealthMart.com"
      },
      {
        "type": "paragraph",
        "text": "I served as the lead content writer and editor for our pharmacist\u2019s website which comprises over 300 pages. I created the architecture and nomenclature for the site.  Working with SMEs across the organization, I ensured that all pages adhere to our style and brand guidelines."
      },
      {
        "type": "heading",
        "text": "Sr. Copy Editor at HBO"
      },
      {
        "type": "paragraph",
        "text": "The scenes in this TV show were punctuated with historical information to deepen the audience\u2019s understanding of the story. I was responsible for ensuring not only the copy was historically accurate but grammatically and structurally precise."
      },
      {
        "type": "heading",
        "text": "Sr. Copy Editor for Microsite"
      },
      {
        "type": "paragraph",
        "text": "U.S. Bank acquired a smaller bank. I was tasked with ensuring all copy is accurate and inline with the style guide. I work across business lines, alongside the marketing and UX teams to collate and organize the pages. I also created a template to which all content contributors adhere."
      }
    ],
    "images": [
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1655129671205-WN9W4GM3BXXAD1S88FVA/51ZCLqorG6L.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1655131827045-5EIN02D9E3Y5GP15J8QK/unsplash-image-A9i0E630ANs.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1655129671205-WN9W4GM3BXXAD1S88FVA/51ZCLqorG6L.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1655142883309-NM4G396N7Z18LL5QDLCN/Screen+Shot+2022-06-13+at+1.54.02+PM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1655129712434-ZCKCHF2WPY7HJUTZMLV1/Screen+Shot+2022-06-13+at+9.57.18+AM.png?format=750w",
      "https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/1655143254158-WYT14Q23REL9SPCKYTDB/Screen+Shot+2022-06-13+at+2.00.30+PM.png?format=750w"
    ],
    "nextId": "usbank",
    "nextTitle": "Financial ecosystem & mobile banking content architecture"
  }
};

/* DOM Cache with Exact HTML ID Alignment */
const caseStudyView = document.getElementById('case-study-view');
const galleryView = document.getElementById('gallery-view');
const backToGalleryBtn = document.getElementById('btn-back-gallery');
const navWorkLink = document.getElementById('nav-work-link');
const navCareerLink = document.getElementById('nav-career-link');
const navAboutLink = document.getElementById('nav-about-link');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

/* Case Study View Elements */
const csTitle = document.getElementById('cs-title');
const csClientLabel = document.getElementById('cs-client-label');
const csOverview = document.getElementById('cs-overview');
const csImage = document.getElementById('cs-image');
const csMetaClient = document.getElementById('cs-meta-client');
const csMetaRole = document.getElementById('cs-meta-role');
const csMetaFocus = document.getElementById('cs-meta-focus');
const csMetaDeliverables = document.getElementById('cs-deliverables-list');
const csContentArea = document.getElementById('cs-content-area');
const csNextBtn = document.getElementById('btn-next-case');
const csNextTitle = document.getElementById('cs-next-title');
const csNavClient = document.getElementById('cs-nav-client');
const csNavRole = document.getElementById('cs-nav-role');
const cvView = document.getElementById('cv-view');
const navCvLink = document.getElementById('nav-cv-link');
const btnBackFromCv = document.getElementById('btn-back-from-cv');
const btnOpenCvAbout = document.getElementById('btn-open-cv-about');

/* State */
let currentCaseId = null;
let currentTheme = 'dark';

/**
 * Switch between Case Study Reading View, CV View, and Gallery Grid View
 */
function showCaseStudyView() {
  if (galleryView) {
    galleryView.classList.remove('active-view');
    galleryView.classList.add('hidden-view');
  }
  if (cvView) {
    cvView.classList.remove('active-view');
    cvView.classList.add('hidden-view');
  }
  if (caseStudyView) {
    caseStudyView.classList.remove('hidden-view');
    caseStudyView.classList.add('active-view');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }

function showGalleryView() {
  if (caseStudyView) {
    caseStudyView.classList.remove('active-view');
    caseStudyView.classList.add('hidden-view');
  }
  if (cvView) {
    cvView.classList.remove('active-view');
    cvView.classList.add('hidden-view');
  }
  if (galleryView) {
    galleryView.classList.remove('hidden-view');
    galleryView.classList.add('active-view');
  }
  currentCaseId = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }

function showCvView() {
  if (galleryView) {
    galleryView.classList.remove('active-view');
    galleryView.classList.add('hidden-view');
  }
  if (caseStudyView) {
    caseStudyView.classList.remove('active-view');
    caseStudyView.classList.add('hidden-view');
  }
  if (cvView) {
    cvView.classList.remove('hidden-view');
    cvView.classList.add('active-view');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }

/**
 * Populate and display a specific case study by ID
 */
function openCaseStudy(caseId) {
  const data = CASE_STUDY_DATA[caseId];
  if (!data) return;

  currentCaseId = caseId;

  if (csTitle) {
    if (caseId === 'usbank') {
      csTitle.textContent = data.title;
    } else {
      csTitle.textContent = data.client;
    }
  }

  if (csClientLabel) {
    if (caseId === 'usbank') {
      csClientLabel.textContent = 'U.S. BANK — CASE STUDY';
    } else {
      csClientLabel.textContent = `${data.client.toUpperCase()} — CASE STUDY`;
    }
  }

  if (csOverview) csOverview.textContent = data.overview;
  
  if (csImage) {
    csImage.src = data.img;
    csImage.alt = `${data.title} Artwork`;
  }

  const imageBox = document.querySelector('.cs-image-box');
  if (imageBox) {
    if (caseId === 'usbank') {
      imageBox.classList.add('usbank-hero-box');
    } else {
      imageBox.classList.remove('usbank-hero-box');
    }
  }

  if (csMetaClient) csMetaClient.textContent = data.client;
  if (csMetaRole) csMetaRole.textContent = data.role;
  if (csMetaFocus) csMetaFocus.textContent = data.focus;
  if (csNavClient) csNavClient.textContent = data.client.toUpperCase();
  if (csNavRole) csNavRole.textContent = data.role;

  if (csMetaDeliverables) {
    csMetaDeliverables.innerHTML = '';
    data.deliverables.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      csMetaDeliverables.appendChild(li);
    });
  }

  /* Build Inline Storytelling Flow (Aligning Images with Copy) */
  let contentHtml = '';
  
  if (caseId === 'usbank') {
    contentHtml += `
<div class="cs-editorial-flow usbank-flow">
  <!-- The Project Metadata Card -->
  <div class="cs-story-block no-image">
    <div class="cs-project-card">
      <div class="cs-project-header">The project: Redesign of the branch locator experience for U.S. Bank</div>
      <div class="cs-project-grid">
        <div class="cs-project-col">
          <div class="cs-project-item"><h5 class="cs-project-label">My role</h5><p class="cs-project-value">Lead Content Strategist</p></div>
          <div class="cs-project-item"><h5 class="cs-project-label">The team</h5><p class="cs-project-value">Visual interaction designer, content strategist, experience architect, SEO specialist, researcher, product owner, scrum master, accessibility consultant & developers.</p></div>
        </div>
        <div class="cs-project-col">
          <div class="cs-project-item"><h5 class="cs-project-label">Key contributions</h5><p class="cs-project-value">Competitive and research analyses, ideating and concepting, content strategy, copy creation, project tracking, global alignment, synthesizing stakeholder feedback & presenting to leadership.</p></div>
          <div class="cs-project-item"><h5 class="cs-project-label">Tools</h5><p class="cs-project-value">Figma, Sketch, InVision Studio, Jira & Mural</p></div>
          <div class="cs-project-item"><h5 class="cs-project-label">Timeframe</h5><p class="cs-project-value">2021-22</p></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Current state & problem -->
  <div class="cs-story-block usbank-block">
    <div class="cs-story-text">
      <h3 class="cs-section-heading">Current state & problem</h3>
      <div class="cs-ui-grid">
        <div class="cs-ui-card">
          <p class="cs-ui-text">
            <ol class="card-list-spaced">
              <li>The content lacks a consistent POV and parity.</li>
              <li>The filters are not comprehensive.</li>
              <li>Tone and voice are outdated.</li>
              <li>There are too many screens.</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
    <div class="cs-story-image image-single">
      <a href="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f89d6738-c2fd-490d-bb1d-9d515305a751/Screenshot+2025-09-17+at+3.51.16%E2%80%AFPM.png?format=750w" class="cs-image-link" title="Click to open image in lightbox">
        <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f89d6738-c2fd-490d-bb1d-9d515305a751/Screenshot+2025-09-17+at+3.51.16%E2%80%AFPM.png?format=750w" alt="Current State Locator — Screens lacking consistency and parity" loading="lazy" decoding="async" />
      </a>
    </div>
    <div class="cs-story-image image-single">
      <a href="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/6d158984-dda3-4150-bbc1-dde5eefc510f/Screenshot+2025-09-17+at+3.51.56%E2%80%AFPM.png?format=750w" class="cs-image-link" title="Click to open image in lightbox">
        <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/6d158984-dda3-4150-bbc1-dde5eefc510f/Screenshot+2025-09-17+at+3.51.56%E2%80%AFPM.png?format=750w" alt="Current State Details — Outdated tone and lack of clear specialist access" loading="lazy" decoding="async" />
      </a>
    </div>
  </div>

  <!-- Pain points -->
  <div class="cs-story-block no-image">
    <div class="cs-story-text">
      <h3 class="cs-section-heading">Pain points</h3>
      <div class="cs-ui-grid">
        <div class="cs-ui-card">
          <p class="cs-ui-text">
            <ul class="card-list-spaced">
              <li>Lack of understanding around the ‘make an appointment’ flow</li>
              <li>Unsure of what’s offered at the bank</li>
              <li>Unsure of ways to bank</li>
              <li>Unsure of how to access products</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Content goals -->
  <div class="cs-story-block no-image">
    <div class="cs-story-text">
      <h3 class="cs-section-heading">Content goals</h3>
      <div class="cs-ui-grid">
        <div class="cs-ui-card">
          <p class="cs-ui-text">
            <ul class="card-list-spaced">
              <li>Allow users to move freely through the experience, finding what they want, when they want it.</li>
              <li>Educate users on what it means to be a valued U.S. Bank customer.</li>
              <li>Utilize our Google API feed and increase organic SEO search value.</li>
              <li>Meet user expectations while directly addressing core business needs.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Landing page -->
  <div class="cs-story-block usbank-block">
    <div class="cs-story-text">
      <h3 class="cs-section-heading">Landing page</h3>
      <div class="cs-ui-grid">
        <div class="cs-ui-card">
          <h4 class="cs-ui-label">Solution 1</h4>
          <p class="cs-ui-text">• Ways to bank above the fold<br>• Educational<br>• Streamlined</p>
        </div>
      </div>
    </div>
    <div class="cs-story-image image-single rounded-30 align-left">
      <a href="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f59a402e-62c6-40de-adc5-0a3351633262/Screen+Shot+2022-05-05+at+6.23.13+PM.png?format=750w" class="cs-image-link" title="Click to open image in lightbox">
        <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/f59a402e-62c6-40de-adc5-0a3351633262/Screen+Shot+2022-05-05+at+6.23.13+PM.png?format=750w" alt="Solution 1 — Ways to bank and branch info above the fold" loading="lazy" decoding="async" />
      </a>
    </div>
    <div class="cs-story-text" style="margin-top: 2rem;">
      <div class="cs-ui-grid">
        <div class="cs-ui-card">
          <h4 class="cs-ui-label">Solution 1I</h4>
          <p class="cs-ui-text">• 1. Three simple categories<br>• 2. Ordered by users’ priorities<br>• 3. All the information, but not all at once</p>
        </div>
      </div>
    </div>
    <div class="cs-story-image image-single rounded-30 align-right">
      <a href="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/28eaf7fb-4260-448c-9a55-abd050708390/Screen+Shot+2022-05-05+at+6.23.28+PM.png?format=750w" class="cs-image-link" title="Click to open image in lightbox">
        <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/28eaf7fb-4260-448c-9a55-abd050708390/Screen+Shot+2022-05-05+at+6.23.28+PM.png?format=750w" alt="Solution 1I — Categories ordered by users' priority" loading="lazy" decoding="async" />
      </a>
    </div>
    <div class="cs-story-text" style="margin-top: 2rem;">
      <div class="cs-ui-grid">
        <div class="cs-ui-card">
          <h4 class="cs-ui-label">Why it matters</h4>
          <p class="cs-ui-text">
            • Accessibility needs met through text links and copy placement.<br>
            • Business needs met through placement and text for financial specialists.<br>
            • Digital needs met through educational copy for the mobile app.<br>
            • SEO needs met through FAQs and relevant google terms.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Filters & Map / The branch details page -->
  <div class="cs-story-block usbank-block">
    <div class="cs-story-text">
      <h3 class="cs-section-heading">Filters & Map</h3>
      <div class="cs-ui-grid">
        <div class="cs-ui-card">
          <p class="cs-ui-text">Names for filters came from research using card sorting and interviews. The map meets accessibility standards with numbered pins and bank names under the selected pins.</p>
        </div>
      </div>
    </div>

    <div class="cs-story-image image-single">
      <a href="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/58168358-2c83-4231-9e84-f9f077fba113/Screen+Shot+2022-03-17+at+2.41.51+PM.png?format=750w" class="cs-image-link" title="Click to open image in lightbox">
        <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/58168358-2c83-4231-9e84-f9f077fba113/Screen+Shot+2022-03-17+at+2.41.51+PM.png?format=750w" alt="Why it matters — Mobile app education module" loading="lazy" decoding="async" />
      </a>
    </div>

    <div class="cs-story-image image-single">
      <a href="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/b7ee5aa7-84b2-46d1-820a-e74cce8401a8/Screenshot+2025-10-02+at+5.05.22%E2%80%AFPM.png?format=750w" class="cs-image-link" title="Click to open image in lightbox">
        <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/b7ee5aa7-84b2-46d1-820a-e74cce8401a8/Screenshot+2025-10-02+at+5.05.22%E2%80%AFPM.png?format=750w" alt="Interactive Map View — Accessible numbered pins" loading="lazy" decoding="async" />
      </a>
    </div>
    <div class="cs-story-text" style="margin-top: 2rem;">
      <h3 class="cs-section-heading">The branch details page</h3>
      <div class="cs-ui-grid">
        <div class="cs-ui-card">
          <p class="cs-ui-text">Find what you need when you want it. Search. Learn. Take action.</p>
        </div>
      </div>
    </div>
    <div class="cs-story-image image-single">
      <a href="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/bdc142a9-c6dd-4af0-853c-3c1320684274/0-1.png?format=750w" class="cs-image-link" title="Click to open image in lightbox">
        <img src="https://images.squarespace-cdn.com/content/v1/62a146e1083a5056b75e3e51/bdc142a9-c6dd-4af0-853c-3c1320684274/0-1.png?format=750w" alt="The Branch Details Page — Clear call-to-actions and details" loading="lazy" decoding="async" />
      </a>
    </div>
  </div>
</div>
`;
  } else {
    contentHtml += '<div class="cs-editorial-flow">';
    
    // We distribute images from data.images[1...] alongside text groups
    const availableImages = data.images && data.images.length > 1 ? data.images.slice(1) : [];
    let imgIdx = 0;
    
    // Group sections by major headings
    let currentGroup = { heading: null, subheadings: [], paragraphs: [], uiCards: [] };
    const groups = [];
    
    if (data.sections && data.sections.length > 0) {
      data.sections.forEach(sec => {
        if (sec.type === 'heading') {
          if (currentGroup.heading || currentGroup.paragraphs.length > 0 || currentGroup.uiCards.length > 0) {
            groups.push(currentGroup);
          }
          currentGroup = { heading: sec.text, subheadings: [], paragraphs: [], uiCards: [] };
        } else if (sec.type === 'subheading') {
          currentGroup.subheadings.push(sec.text);
        } else if (sec.type === 'ui_card') {
          currentGroup.uiCards.push(sec);
        } else {
          currentGroup.paragraphs.push(sec.text);
        }
      });
      if (currentGroup.heading || currentGroup.paragraphs.length > 0 || currentGroup.uiCards.length > 0) {
        groups.push(currentGroup);
      }
    } else {
      groups.push({ heading: 'Overview', subheadings: [], paragraphs: [data.overview], uiCards: [] });
    }

    // Render each group paired side-by-side with a project image (or Full-Width Map)
    groups.forEach((grp, idx) => {
      const isEven = idx % 2 === 0;
      // Do not assign an image to 'The project:' metadata block so Current state & problem gets image #1!
      const shouldHaveImg = (grp.heading !== 'The project:' && grp.heading !== 'Why it matters' && grp.heading !== 'Content goals' && !(data.client === 'U.S. Bank' && grp.heading === 'Pain points'));
      const pairedImg = (shouldHaveImg && imgIdx < availableImages.length) ? availableImages[imgIdx] : null;
      if (pairedImg) imgIdx++;

      const isFullWidthMap = grp.heading && (grp.heading.toLowerCase().includes('map') || grp.heading.toLowerCase().includes('close-up') || grp.heading.toLowerCase().includes('solution 3') || grp.heading.toLowerCase().includes('filters'));
      const isProjectSpec = (grp.heading === 'The project:' || grp.heading === 'Overview' || (idx === 0 && !pairedImg));
      const isBranchDetails = (grp.heading === 'The branch details page');

      if (isBranchDetails) {
        // Grab remaining image for Branch Details: Welcome to Northeast Branch
        const img1 = (imgIdx < availableImages.length) ? availableImages[imgIdx++] : null;

        contentHtml += `
          <div class="cs-story-block no-image" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
            <div class="cs-story-text" style="width: 100%; max-width: 880px; margin: 0 auto;">
              <h3 class="cs-section-heading" style="text-align: center;">${grp.heading}</h3>
              ${grp.uiCards.map(c => `
                <div class="cs-ui-card" style="max-width: 880px; margin: 0 auto; padding: 40px 48px; text-align: center;">
                  <p class="cs-ui-text" style="font-size: 1.25rem; line-height: 1.8;">${c.text}</p>
                </div>
              `).join('')}
            </div>
            ${img1 ? `
              <div class="cs-story-image" style="margin-top: 36px; width: 100%; max-width: 1000px; display: flex; justify-content: center;">
                <a href="${img1}" target="_blank" rel="noopener noreferrer" class="cs-image-link" title="Click to open Welcome to Northeast Branch in new window" style="width: 100%;">
                  <img src="${img1}" alt="Welcome to the Northeast Branch" loading="lazy" decoding="async" style="width: 100%; border-radius: 16px;" />
                </a>
              </div>
            ` : ''}
          </div>
        `;
        return;
      }

      if (isProjectSpec) {
        const allText = grp.paragraphs || [];
        const midIdx = Math.ceil(allText.length / 2);
        const leftItems = allText.slice(0, midIdx);
        const rightItems = allText.slice(midIdx);

        const renderSpecItem = (text) => {
          const colonIdx = text.indexOf(':');
          if (colonIdx !== -1) {
            const lbl = text.substring(0, colonIdx).trim();
            const val = text.substring(colonIdx + 1).trim();
            return `<div class="cs-project-item"><h5 class="cs-project-label">${lbl}</h5><p class="cs-project-value">${val}</p></div>`;
          }
          return `<div class="cs-project-item"><p class="cs-project-value">${text}</p></div>`;
        };

        contentHtml += `
          <div class="cs-story-block no-image">
            <div class="cs-project-card">
              ${grp.heading ? `<div class="cs-project-header">${grp.heading}</div>` : ''}
              <div class="cs-project-grid">
                <div class="cs-project-col">
                  ${leftItems.map(renderSpecItem).join('')}
                </div>
                <div class="cs-project-col">
                  ${rightItems.map(renderSpecItem).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
        return;
      }

      contentHtml += `
        <div class="cs-story-block ${!pairedImg ? 'no-image' : (isFullWidthMap ? 'full-width-map' : (!isEven ? 'layout-reverse' : ''))}">
          <div class="cs-story-text">
            ${grp.heading ? `<h3 class="cs-section-heading">${grp.heading}</h3>` : ''}
            ${grp.subheadings.map(sh => `<h4 class="cs-section-subheading">${sh}</h4>`).join('')}
            ${grp.paragraphs.map(p => `<p class="cs-section-text">${p}</p>`).join('')}
            ${grp.uiCards && grp.uiCards.length > 0 ? `
              <div class="cs-ui-grid">
                ${grp.uiCards.map(c => `
                  <div class="cs-ui-card">
                    ${c.label ? `<h4 class="cs-ui-label">${c.label}</h4>` : ''}
                    <p class="cs-ui-text">${c.text}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
          ${pairedImg ? `
            <div class="cs-story-image"><a href="${pairedImg}" target="_blank" rel="noopener noreferrer" class="cs-image-link" title="Click to open full size in new pop-up window"><img src="${pairedImg}" alt="${data.client} Figure ${idx + 1}" loading="lazy" decoding="async" fetchpriority="low" /></a></div>
          ` : ''}
        </div>
      `;
    });

    contentHtml += '</div>';

    /* If there are remaining images, display in Visual Showcase Grid */
    if (imgIdx < availableImages.length) {
      const remainingImgs = availableImages.slice(imgIdx);
      contentHtml += `
        <div class="cs-gallery-showcase">
          <h3 class="cs-gallery-title">Additional project screens &amp; visual artifacts (${remainingImgs.length})</h3>
          <div class="cs-gallery-grid">
      `;
      remainingImgs.forEach((imgUrl, i) => {
        contentHtml += `
            <div class="cs-gallery-item">
              <a href="${imgUrl}" target="_blank" rel="noopener noreferrer" class="cs-image-link" title="Click to open full size in new pop-up window">
                <img src="${imgUrl}" alt="${data.client} Screen ${imgIdx + i + 1}" loading="lazy" decoding="async">
              </a>
            </div>
        `;
      });
      contentHtml += `
          </div>
        </div>
      `;
    }
  }

  if (csContentArea) csContentArea.innerHTML = contentHtml;

  /* Setup Next Case Study Cycling */
  if (csNextTitle) csNextTitle.textContent = data.nextTitle;
  if (csNextBtn) {
    csNextBtn.onclick = () => {
      openCaseStudy(data.nextId);
    };
  }

  showCaseStudyView();
}

/**
 * Event Listeners & Initializers
 */
document.addEventListener('DOMContentLoaded', () => {
  // Google Search filter logic
  const searchInput = document.getElementById('hero-search-input');
  const searchBtn = document.getElementById('search-btn');
  const luckyBtn = document.getElementById('lucky-btn');
  const clearBtn = document.getElementById('search-clear-btn');
  const statsPanel = document.getElementById('search-results-stats');
  const caseCards = document.querySelectorAll('.case-card');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      
      if (clearBtn) {
        clearBtn.style.display = query ? 'block' : 'none';
      }

      let matches = 0;
      caseCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'flex';
          matches++;
        } else {
          card.style.display = 'none';
        }
      });

      if (statsPanel) {
        if (query) {
          statsPanel.style.display = 'block';
          statsPanel.textContent = `About ${matches} results (0.01 seconds)`;
        } else {
          statsPanel.style.display = 'none';
        }
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const target = document.getElementById('case-studies-section');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.style.display = 'none';
      if (statsPanel) statsPanel.style.display = 'none';
      caseCards.forEach(card => {
        card.style.display = 'flex';
      });
      searchInput.focus();
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const target = document.getElementById('case-studies-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (luckyBtn) {
    luckyBtn.addEventListener('click', () => {
      const keys = Object.keys(CASE_STUDY_DATA);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      
      luckyBtn.textContent = "Loading luck...";
      setTimeout(() => {
        luckyBtn.textContent = "I'm Feeling Lucky";
        openCaseStudy(randomKey);
      }, 500);
    });
  }

  const clickableCards = document.querySelectorAll('.clickable-card');
  clickableCards.forEach(card => {
    card.addEventListener('click', () => {
      const caseId = card.getAttribute('data-case');
      openCaseStudy(caseId);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const caseId = card.getAttribute('data-case');
        openCaseStudy(caseId);
      }
    });
  });

  if (backToGalleryBtn) {
    backToGalleryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showGalleryView();
    });
  }

  if (navWorkLink) {
    navWorkLink.addEventListener('click', (e) => {
      e.preventDefault();
      showGalleryView();
    });
  }

  if (navCareerLink) {
    navCareerLink.addEventListener('click', (e) => {
      e.preventDefault();
      showGalleryView();
      setTimeout(() => {
        const sec = document.getElementById('career-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    });
  }

  if (navAboutLink) {
    navAboutLink.addEventListener('click', (e) => {
      e.preventDefault();
      showGalleryView();
      setTimeout(() => {
        const sec = document.getElementById('about-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    });
  }

  if (navCvLink) {
    navCvLink.addEventListener('click', (e) => {
      e.preventDefault();
      showCvView();
    });
  }

  if (btnBackFromCv) {
    btnBackFromCv.addEventListener('click', (e) => {
      e.preventDefault();
      showGalleryView();
    });
  }

  if (btnOpenCvAbout) {
    btnOpenCvAbout.addEventListener('click', (e) => {
      e.preventDefault();
      showCvView();
    });
  }

  // Lightbox Modal Logic
  const lightboxModal = document.getElementById('cs-lightbox-modal');
  const lightboxImg = document.getElementById('cs-lightbox-image');
  const lightboxCaption = document.getElementById('cs-lightbox-caption');
  const lightboxClose = document.getElementById('cs-lightbox-close');
  const lightboxBackdrop = document.getElementById('cs-lightbox-backdrop');

  document.addEventListener('click', (e) => {
    const imageLink = e.target.closest('.cs-image-link');
    if (imageLink) {
      e.preventDefault();
      const imgSrc = imageLink.getAttribute('href');
      const imgEl = imageLink.querySelector('img');
      const imgAlt = imgEl ? imgEl.getAttribute('alt') : '';
      
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = imgSrc;
        if (lightboxCaption) {
          lightboxCaption.textContent = imgAlt || 'Case Study Screenshot';
        }
        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
      }
    }
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      if (lightboxModal) {
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', () => {
      if (lightboxModal) {
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      themeToggleBtn.textContent = currentTheme === 'dark' ? '[Light Mode]' : '[Dark Mode]';
    });
  }

});
