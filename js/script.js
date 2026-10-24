/**
 * MARWAN MOHAMMED - PROFESSIONAL PORTFOLIO
 * Vanilla JavaScript Engine: Bilingual (EN/AR) RTL/LTR, Dark/Light Theme,
 * Accessible Project Modal, Category Filtering, Form Validation, & Smooth Scrolling.
 */

'use strict';

// ============================================================================
// 1. Translations & Content Dictionary
// ============================================================================
const translations = {
  en: {
    meta: {
      title: "Marwan Mohammed | Software Developer | AI & Automation",
      description: "Portfolio of Marwan Mohammed - Software developer specializing in workflow automation, n8n, Amazon SP-API, REST API integrations, and practical business tools."
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      services: "Services",
      contact: "Contact",
      switchLangAria: "Switch language to Arabic",
      themeToggleAria: "Toggle light or dark theme",
      mobileMenuAria: "Toggle mobile navigation menu"
    },
    hero: {
      status: "Building Practical Automation Solutions",
      name: "Marwan Mohammed",
      title: "Software Developer | AI & Automation",
      description: "I build practical software solutions that automate repetitive tasks, connect business systems, and turn complex data into useful insights. My focus is on workflow automation, API integration, and AI-assisted development that solves real operational problems.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      highlight1Title: "Workflow Automation",
      highlight1Desc: "n8n & operational pipelines",
      highlight2Title: "API Integrations",
      highlight2Desc: "Amazon SP-API & REST",
      highlight3Title: "Data Structuring",
      highlight3Desc: "Clean review & reporting",
      highlight4Title: "AI-Assisted Dev",
      highlight4Desc: "Prompt & logic design"
    },
    about: {
      badge: "About Me",
      title: "Practical Mindset, Measured Solutions",
      subtitle: "Developer background, approach, and professional philosophy",
      bio: "I'm a software developer focused on building practical digital solutions for real business needs. My work combines programming, workflow automation, API integrations, data processing, and AI-assisted development. I have hands-on experience building an n8n-based Amazon financial automation workflow connected to a real Amazon UAE account. I approach development with a problem-solving mindset: understand the process, identify repetitive work, design a reliable solution, and make the resulting data easier to use. I'm continuously strengthening my programming fundamentals and expanding my skills in software engineering, AI, and automation.",
      philosophyTag: "Professional Philosophy",
      philosophyQuote: "\"Build useful solutions first. Automate responsibly. Keep systems understandable, maintainable, and measurable.\"",
      profileRole: "Software Developer",
      badgeSpecialtyLabel: "Specialty",
      badgeSpecialtyValue: "Automation & APIs",
      badgeAmazonLabel: "Hands-on",
      badgeAmazonValue: "Amazon UAE Account",
      badgeMindsetLabel: "Approach",
      badgeMindsetValue: "Problem-Solving Mindset",
      pillar1Title: "Understand Process",
      pillar1Desc: "Map real operational workflows and locate bottlenecks before writing code.",
      pillar2Title: "Reliable Architecture",
      pillar2Desc: "Build stable workflows with authentication, error handling, and auditability.",
      pillar3Title: "Actionable Data",
      pillar3Desc: "Turn raw logs and complex JSON into clear, review-ready tables and sheets."
    },
    skills: {
      badge: "Technical Skills",
      title: "Skills & Technologies",
      subtitle: "Categorized competencies with honest, grounded representation of technologies",
      cat1: "Programming and Web Development",
      cat2: "Automation and Integration",
      cat3: "Data and Reporting",
      cat4: "AI-Assisted Development",
      cat5: "Infrastructure and Tools",
      learningBadge: "Currently developing"
    },
    projects: {
      badge: "Featured Projects",
      title: "Featured Projects",
      subtitle: "Real automation solutions and planned software tools",
      filterAll: "All Projects",
      filterAutomation: "Automation & APIs",
      filterData: "Data & Reporting",
      filterPlanned: "Planned & Concepts",
      statusLive: "Live & Tested",
      statusPlanned: "Planned",
      statusConcept: "Concept / Proposed",
      btnDetails: "View Details",
      outcomesTitle: "Verified Outcomes:",
      modalCloseAria: "Close project details modal",
      modalTechLabel: "Technologies Used",
      modalOutcomesLabel: "Key Outcomes & Architecture",
      modalDiscussBtn: "Discuss this Project"
    },
    experience: {
      badge: "Professional Experience",
      title: "Experience & Background",
      subtitle: "Practical e-commerce operations, marketplace workflows, and automation development",
      exp1Role: "Workflow Automation Developer",
      exp1Date: "Current",
      exp1Desc: "Designing and developing practical automation workflows using n8n, APIs, structured data, and AI-assisted development. Current work includes a financial data automation workflow connected to Amazon UAE.",
      exp2Role: "Marketplace Operations and Data Workflows",
      exp2Date: "Professional Background",
      exp2Desc: "Hands-on work with e-commerce marketplace operations, catalog data, pricing, orders, financial reporting, and operational processes. This experience informs the development of automation tools designed around real business workflows.",
      exp3Role: "Independent Software Projects",
      exp3Date: "Ongoing",
      exp3Desc: "Building and refining software projects that combine programming, API integrations, workflow automation, data processing, and AI-assisted development."
    },
    services: {
      badge: "Services",
      title: "What I Offer",
      subtitle: "Practical technical capabilities tailored for business efficiency",
      srv1Title: "Workflow Automation",
      srv1Desc: "Automate repetitive operational tasks and connect processes into clear, maintainable workflows.",
      srv1F1: "Repetitive task elimination",
      srv1F2: "Error reduction & retries",
      srv1F3: "Process synchronization",
      srv2Title: "API Integration",
      srv2Desc: "Connect supported business systems and APIs to exchange, process, and organize data.",
      srv2F1: "Secure OAuth/LWA authentication",
      srv2F2: "Webhook event listening",
      srv2F3: "JSON data extraction",
      srv3Title: "Data Processing and Reporting",
      srv3Desc: "Transform raw CSV, JSON, and spreadsheet data into structured reports that are easier to review.",
      srv3F1: "Financial record structuring",
      srv3F2: "Catalog data validation",
      srv3F3: "Google Sheets sync",
      srv4Title: "AI-Assisted Business Solutions",
      srv4Desc: "Explore practical AI-powered workflows for content preparation, data classification, and operational support.",
      srv4F1: "Prompt engineering & templates",
      srv4F2: "Assisted classification logic",
      srv4F3: "Operational task acceleration"
    },
    objective: {
      tag: "Career Objective",
      quote: "\"My goal is to become a stronger software and automation engineer by building reliable solutions that solve real business problems. I aim to combine solid programming fundamentals, thoughtful API integration, and practical AI capabilities to create software that saves effort, improves data visibility, and helps businesses operate more efficiently.\""
    },
    contact: {
      badge: "Contact",
      title: "Get in Touch",
      subtitle: "Let's connect regarding automation projects, APIs, or software opportunities",
      infoTitle: "Let's Connect",
      infoDesc: "Feel free to reach out directly via WhatsApp or social channels to discuss your automation and development requirements.",
      whatsappLabel: "WhatsApp (Direct Message)",
      facebookLabel: "Facebook Profile",
      instagramLabel: "Instagram",
      availability: "Available for freelance automation projects and technical opportunities.",
      formNameLabel: "Your Name",
      formNamePlaceholder: "e.g., Sarah Johnson",
      formEmailLabel: "Email Address",
      formEmailPlaceholder: "name@company.com",
      formMessageLabel: "Project Details / Message",
      formMessagePlaceholder: "Describe your automation goals, data challenges, or business requirements...",
      formDisclaimer: "Frontend Demo Notice: This contact form runs client-side for demonstration and needs a backend or form service (e.g., Formspree, EmailJS) to deliver messages. For immediate contact, please message directly via WhatsApp.",
      formSubmitBtn: "Send Message",
      errName: "Please enter your name (at least 2 characters).",
      errEmail: "Please provide a valid email address.",
      errMessage: "Please enter your message (at least 10 characters).",
      successMsg: "Message validated successfully! Note: As this is a static frontend portfolio demonstration, please reach out via WhatsApp at +201044714857 for direct communication."
    },
    footer: {
      tagline: "Building practical software solutions, workflow automations, and API integrations that solve real operational problems.",
      copyright: "© {year} Marwan Mohammed. Built with care and a focus on practical solutions.",
      backToTop: "Back to top"
    }
  },
  ar: {
    meta: {
      title: "مروان محمد | مطور برمجيات | الذكاء الاصطناعي والأتمتة",
      description: "الموقع المهني للمطور مروان محمد - متخصص في أتمتة سير العمل، n8n، والتكامل مع واجهات Amazon SP-API وREST API وحلول الأعمال العملية."
    },
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرات",
      services: "الخدمات",
      contact: "التواصل",
      switchLangAria: "التبديل إلى اللغة الإنجليزية",
      themeToggleAria: "تبديل المظهر الداكن أو الفاتح",
      mobileMenuAria: "فتح أو إغلاق قائمة التنقل للجوال"
    },
    hero: {
      status: "أبني حلول أتمتة عملية",
      name: "مروان محمد",
      title: "مطور برمجيات | الذكاء الاصطناعي والأتمتة",
      description: "أطوّر حلولًا برمجية عملية تساعد على أتمتة المهام المتكررة، وربط الأنظمة، وتحويل البيانات المعقدة إلى معلومات مفيدة. أركز على أتمتة سير العمل، والتكامل مع واجهات API، واستخدام الذكاء الاصطناعي لبناء حلول تعالج مشكلات تشغيلية حقيقية.",
      btnProjects: "استعرض المشاريع",
      btnContact: "تواصل معي",
      highlight1Title: "أتمتة سير العمل",
      highlight1Desc: "مسارات n8n التشغيلية",
      highlight2Title: "التكامل مع API",
      highlight2Desc: "أمازون SP-API وREST",
      highlight3Title: "تنظيم البيانات",
      highlight3Desc: "مراجعة وتقارير منظمة",
      highlight4Title: "تطوير مدعوم بالذكاء الاصطناعي",
      highlight4Desc: "تصميم الأوامر والمنطق"
    },
    about: {
      badge: "نبذة عني",
      title: "منهجية عملية وحلول مدروسة",
      subtitle: "خلفيتي البرمجية، منهجية العمل، وفلسفتي المهنية",
      bio: "أنا مطور برمجيات أركز على بناء حلول رقمية عملية تلبي احتياجات الأعمال الحقيقية. أجمع في عملي بين البرمجة، وأتمتة سير العمل، والتكامل مع واجهات API، ومعالجة البيانات، والاستفادة من أدوات الذكاء الاصطناعي في التطوير. لدي خبرة عملية في بناء نظام لأتمتة البيانات المالية لأمازون باستخدام n8n وربطه بحساب أمازون الإمارات الفعلي. أبدأ كل مشروع بفهم المشكلة، وتحديد المهام المتكررة، وتصميم حل يمكن الاعتماد عليه، وتنظيم البيانات بطريقة تسهّل مراجعتها واتخاذ القرارات بناءً عليها. أواصل تطوير أساسياتي البرمجية وتوسيع معرفتي بهندسة البرمجيات والذكاء الاصطناعي والأتمتة.",
      philosophyTag: "الفلسفة المهنية",
      philosophyQuote: "\"ابدأ بحل مفيد، وأتمت المهام بمسؤولية، واجعل الأنظمة واضحة وقابلة للصيانة وقياس النتائج.\"",
      profileRole: "مطور برمجيات",
      badgeSpecialtyLabel: "التخصص",
      badgeSpecialtyValue: "الأتمتة وواجهات API",
      badgeAmazonLabel: "خبرة واقعية",
      badgeAmazonValue: "حساب أمازون الإمارات",
      badgeMindsetLabel: "المنهجية",
      badgeMindsetValue: "حل المشكلات العملية",
      pillar1Title: "فهم الإجراءات",
      pillar1Desc: "دراسة مسارات العمل التشغيلية وتحديد المهام المتكررة بدقة قبل كتابة أي كود.",
      pillar2Title: "هيكلية موثوقة",
      pillar2Desc: "بناء مسارات عمل مستقرة تعتمد على المصادقة الآمنة وإدارة الأخطاء والمتابعة.",
      pillar3Title: "بيانات قابلة للاستخدام",
      pillar3Desc: "تحويل سجلات JSON والبيانات الخام إلى جداول وتقارير واضحة تدعم اتخاذ القرار."
    },
    skills: {
      badge: "المهارات التقنية",
      title: "المهارات والتقنيات",
      subtitle: "مهارات مصنفة حسب المجال مع تمثيل واقعي وموثوق للتقنيات",
      cat1: "البرمجة وتطوير الويب",
      cat2: "الأتمتة وتكامل الأنظمة",
      cat3: "البيانات والتقارير",
      cat4: "التطوير المدعوم بالذكاء الاصطناعي",
      cat5: "البنية التحتية والأدوات",
      learningBadge: "قيد التطوير حالياً"
    },
    projects: {
      badge: "المشاريع المميزة",
      title: "المشاريع المميزة",
      subtitle: "حلول أتمتة واقعية وأدوات برمجية قيد التطوير",
      filterAll: "جميع المشاريع",
      filterAutomation: "الأتمتة والربط البرمجي",
      filterData: "البيانات والتقارير",
      filterPlanned: "المشاريع المقترحة",
      statusLive: "مبني ومختبر فعلياً",
      statusPlanned: "مخطط له",
      statusConcept: "تصور مقترح",
      btnDetails: "عرض التفاصيل",
      outcomesTitle: "النتائج المتحققة:",
      modalCloseAria: "إغلاق نافذة تفاصيل المشروع",
      modalTechLabel: "التقنيات المستخدمة",
      modalOutcomesLabel: "النتائج وهيكلية الحل",
      modalDiscussBtn: "ناقش هذا المشروع"
    },
    experience: {
      badge: "الخبرات المهنية",
      title: "الخبرات المهنية والخلفية العملية",
      subtitle: "خبرات عملية في منصات التجارة الإلكترونية، مسارات البيانات، وتطوير الأتمتة",
      exp1Role: "مطور أتمتة سير العمل",
      exp1Date: "مستمر",
      exp1Desc: "تصميم وتطوير مسارات أتمتة عملية باستخدام n8n وواجهات API والبيانات المنظمة وأدوات الذكاء الاصطناعي. يشمل العمل الحالي نظامًا لأتمتة البيانات المالية متصلًا بأمازون الإمارات.",
      exp2Role: "تشغيل منصات التجارة الإلكترونية ومسارات البيانات",
      exp2Date: "خلفية مهنية",
      exp2Desc: "خبرة عملية في تشغيل منصات التجارة الإلكترونية، وبيانات المنتجات، والتسعير، والطلبات، والتقارير المالية، والإجراءات التشغيلية. تساعدني هذه الخلفية على تطوير أدوات أتمتة مبنية على احتياجات العمل الفعلية.",
      exp3Role: "مشروعات برمجية مستقلة",
      exp3Date: "قيد التطوير المستمر",
      exp3Desc: "بناء وتطوير مشروعات برمجية تجمع بين البرمجة، والتكامل مع واجهات API، وأتمتة سير العمل، ومعالجة البيانات، والاستفادة من أدوات الذكاء الاصطناعي."
    },
    services: {
      badge: "الخدمات",
      title: "ما أقدمه للأعمال",
      subtitle: "حلول تقنية عملية مصممة لرفع كفاءة العمليات التشغيلية",
      srv1Title: "أتمتة سير العمل",
      srv1Desc: "أتمتة المهام التشغيلية المتكررة وربط الإجراءات في مسارات عمل واضحة وقابلة للصيانة.",
      srv1F1: "إلغاء المهام اليدوية المكررة",
      srv1F2: "معالجة تلقائية للأخطاء",
      srv1F3: "مزامنة الأنظمة التشغيلية",
      srv2Title: "التكامل مع واجهات API",
      srv2Desc: "ربط الأنظمة وواجهات API المدعومة لتبادل البيانات ومعالجتها وتنظيمها.",
      srv2F1: "مصادقة آمنة عبر OAuth/LWA",
      srv2F2: "استقبال تنبيهات Webhooks",
      srv2F3: "استخراج وتنقية بيانات JSON",
      srv3Title: "معالجة البيانات وإعداد التقارير",
      srv3Desc: "تحويل بيانات CSV وJSON وجداول البيانات إلى تقارير منظمة يسهل مراجعتها.",
      srv3F1: "تنظيم القيود والسجلات المالية",
      srv3F2: "التحقق من بيانات الكتالوج",
      srv3F3: "مزامنة Google Sheets",
      srv4Title: "حلول الأعمال بالذكاء الاصطناعي",
      srv4Desc: "تصميم حلول عملية مدعومة بالذكاء الاصطناعي لإعداد المحتوى وتصنيف البيانات ودعم العمليات.",
      srv4F1: "هندسة الأوامر والقوالب الذكية",
      srv4F2: "منطق تصنيف مدعوم بالذكاء الاصطناعي",
      srv4F3: "تسريع إنجاز المهام الرقمية"
    },
    objective: {
      tag: "الهدف المهني",
      quote: "\"هدفي هو تطوير قدراتي في هندسة البرمجيات والأتمتة من خلال بناء حلول موثوقة تعالج مشكلات الأعمال الحقيقية. أسعى إلى الجمع بين أساسيات برمجية قوية، والتكامل المدروس مع واجهات API، وإمكانات الذكاء الاصطناعي العملية لإنشاء أدوات تقلل الجهد اليدوي، وتحسن وضوح البيانات، وتساعد الأعمال على العمل بكفاءة أكبر.\""
    },
    contact: {
      badge: "التواصل",
      title: "تواصل معي",
      subtitle: "لنتواصل حول مشاريع الأتمتة، الربط البرمجي، أو فرص التعاون التقني",
      infoTitle: "قنوات التواصل المباشرة",
      infoDesc: "يمكنك التواصل معي مباشرة عبر واتساب أو القنوات المعتمدة لمناقشة متطلبات الأتمتة والمشاريع البرمجية.",
      whatsappLabel: "واتساب (محادثة مباشرة)",
      facebookLabel: "الملف الشخصي على فيسبوك",
      instagramLabel: "إنستغرام",
      availability: "متاح لمشاريع الأتمتة المستقلة وفرص التعاون التقني.",
      formNameLabel: "الاسم",
      formNamePlaceholder: "مثال: أحمد عبد الله",
      formEmailLabel: "البريد الإلكتروني",
      formEmailPlaceholder: "name@company.com",
      formMessageLabel: "تفاصيل المشروع / الرسالة",
      formMessagePlaceholder: "اكتب تفاصيل مشروعك أو متطلبات الأتمتة أو تحديات البيانات التي تريد حلها...",
      formDisclaimer: "تنبيه توضيحي للنموذج: هذا النموذج يعمل على واجهة المستخدم (Frontend) لأغراض العرض والتجربة فقط، ويتطلب ربطه بخدمة خادم أو بريد إلكتروني (مثل Formspree أو EmailJS) لإرسال الرسائل فعلياً. للتواصل الفوري يُرجى استخدام رابط واتساب المباشر.",
      formSubmitBtn: "إرسال الرسالة",
      errName: "يرجى إدخال اسمك (حرفين على الأقل).",
      errEmail: "يرجى إدخال بريد إلكتروني صالح.",
      errMessage: "يرجى إدخال رسالتك (10 أحرف على الأقل).",
      successMsg: "تم التحقق من صحة الحقول بنجاح! ملاحظة: نظراً لأن هذا نموذج عرض تجريبي للواجهة الأمامية، يُرجى التواصل مباشرة عبر واتساب على الرقم +201044714857."
    },
    footer: {
      tagline: "بناء حلول برمجية عملية، وأتمتة مسارات العمل، والتكامل مع واجهات API لمعالجة مشكلات تشغيلية حقيقية.",
      copyright: "© {year} مروان محمد. صُمم بعناية مع التركيز على الحلول العملية.",
      backToTop: "العودة للأعلى"
    }
  }
};

// ============================================================================
// 2. Projects Detailed Data (EN & AR)
// ============================================================================
const projectsData = [
  {
    id: "amazon-automation",
    category: "automation",
    status: "live",
    badgeKey: "statusLive",
    title: {
      en: "Amazon Financial Automation",
      ar: "أتمتة البيانات المالية لأمازون"
    },
    shortDesc: {
      en: "An n8n-based automation workflow that connects to Amazon Selling Partner API and organizes financial and order-related data for easier review. The workflow collects relevant order information, transaction records, fees, refunds, and settlement-related data, then structures the results in Google Sheets.",
      ar: "سير عمل آلي باستخدام n8n متصل بواجهة Amazon Selling Partner API، يجمع بيانات الطلبات والمعاملات المالية والرسوم والمبالغ المستردة وبيانات التسويات ذات الصلة، ثم ينظمها داخل Google Sheets لتسهيل المراجعة والمتابعة المالية."
    },
    fullDesc: {
      en: "Built and tested on a real Amazon UAE seller account, this production-ready workflow establishes an authenticated connection via Login with Amazon (LWA) and the Amazon Selling Partner API (SP-API). It regularly fetches order events, financial transaction batches, marketplace commission fees, and settlement reports. Using n8n custom data nodes and JSON parsing, it normalizes disparate payload schemas into structured rows inside Google Sheets, eliminating fragmented manual data handling and creating an auditable financial trail.",
      ar: "تم بناء هذا النظام واختباره فعليًا على حساب بائع نشط في أمازون الإمارات. يقوم سير العمل بإنشاء اتصال مصادق وآمن عبر Login with Amazon (LWA) وواجهة Amazon Selling Partner API (SP-API). يسترجع النظام دورياً بيانات الطلبات والمعاملات المالية ورسوم المنصة وتقارير التسويات، ثم يعالج هياكل JSON ويحولها إلى صفوف منظمة داخل جداول Google Sheets، مما يلغي الجمع اليدوي المشتت ويوفر سجلاً مالياً واضحاً للمراجعة."
    },
    technologies: [
      "n8n",
      "Amazon SP-API",
      "REST APIs",
      "JSON",
      "LWA Authentication",
      "Google Sheets"
    ],
    outcomes: {
      en: [
        "Connects the Amazon account with an automated data workflow.",
        "Reduces fragmented manual data collection.",
        "Organizes financial records into a clearer review structure."
      ],
      ar: [
        "يربط حساب أمازون الفعلي بمسار عمل آلي ومنتظم لتدفق البيانات.",
        "يقلل الجمع اليدوي المشتت لسجلات المعاملات والتقارير.",
        "ينظم السجلات والبيانات المالية في هيكل واضح يسهل مراجعته."
      ]
    },
    previewImage: "assets/screenshots/amazon-workflow-diagram.svg"
  },
  {
    id: "product-validation",
    category: "data",
    status: "planned",
    badgeKey: "statusPlanned",
    title: {
      en: "Product Data Validation and Conversion",
      ar: "التحقق من بيانات المنتجات وتحويلها"
    },
    shortDesc: {
      en: "A planned utility for validating product fields, detecting missing information, and converting catalog data into structured formats suitable for downstream workflows.",
      ar: "أداة مخطط لها للتحقق من حقول المنتجات، واكتشاف البيانات الناقصة، وتحويل بيانات الكتالوج إلى تنسيقات منظمة مناسبة لسير العمل اللاحق."
    },
    fullDesc: {
      en: "This utility is planned to solve catalog inconsistencies across e-commerce inventories. It will ingest raw product spreadsheets, audit required marketplace attributes (e.g., SKU, barcodes, pricing, dimensions, and descriptions), flag discrepancies, and export clean, standardized JSON and CSV datasets ready for marketplace feeds or ERP ingestion.",
      ar: "أداة مصممة لمعالجة تضارب واختلاف بيانات المنتجات في منصات التجارة الإلكترونية. ستقوم بقراءة ملفات المنتجات، والتحقق من الحقول الإلزامية (مثل الرمز التعريفي SKU، الباركود، الأسعار، الأبعاد والوصف)، واكتشاف النواقص، ثم تصدير بيانات معيارية بصيغ JSON وCSV مهيأة للتكامل مع المنصات أو أنظمة إدارة المخزون."
    },
    technologies: ["Python", "JavaScript", "JSON", "CSV"],
    outcomes: {
      en: [
        "Automated rule-based field verification.",
        "Identification of missing critical product attributes.",
        "Standardized multi-format export for downstream systems."
      ],
      ar: [
        "فحص تلقائي لحقول المنتجات بناءً على قواعد محددة.",
        "اكتشاف وتنبيه فوري بشأن البيانات الإلزامية الناقصة.",
        "تصدير منظم بمتعدد الصيغ لتسهيل استيرادها في الأنظمة اللاحقة."
      ]
    }
  },
  {
    id: "price-monitoring",
    category: "automation",
    status: "planned",
    badgeKey: "statusPlanned",
    title: {
      en: "Competitor Price Monitoring",
      ar: "رصد ومقارنة أسعار المنافسين"
    },
    shortDesc: {
      en: "A planned monitoring workflow for comparing product prices using permitted data sources, identifying relevant changes, and preparing structured pricing reports.",
      ar: "سير عمل مخطط له لمقارنة أسعار المنتجات باستخدام مصادر بيانات مسموح بها، ورصد التغييرات المهمة، وتجهيز تقارير أسعار منظمة."
    },
    fullDesc: {
      en: "A planned workflow that automates price comparison using permitted API endpoints and authorized catalog feeds. The workflow will systematically log price adjustments, evaluate threshold variances, and populate comparison matrices in Google Sheets, enabling commercial decision-makers to react thoughtfully without manual price checking.",
      ar: "سير عمل مخطط له لمقارنة أسعار المنتجات باستخدام واجهات برمجية ومصادر بيانات مسموح بها. سيقوم بتسجيل تغييرات الأسعار دورياً، ورصد الفروقات المؤثرة، وتحديث تقارير مقارنة واضحة في Google Sheets لمساعدة أصحاب الأعمال على اتخاذ قرارات تسعير مستنيرة دون الحاجة للمتابعة اليدوية المرهقة."
    },
    technologies: ["n8n", "APIs", "JSON", "Google Sheets"],
    outcomes: {
      en: [
        "Periodic checks using compliant data access.",
        "Alerting on noteworthy price fluctuations.",
        "Centralized historical price trends in spreadsheets."
      ],
      ar: [
        "متابعة دورية تعتمد على آليات وصول نظامية ومصرح بها.",
        "تنبيه وتحديد التغيرات السعرية ذات الأهمية.",
        "توثيق تاريخي لتغيرات الأسعار في جداول بيانات مركزية."
      ]
    }
  },
  {
    id: "sales-reporting",
    category: "data",
    status: "planned",
    badgeKey: "statusPlanned",
    title: {
      en: "Automated Sales and Profit Reporting",
      ar: "تقارير المبيعات والأرباح الآلية"
    },
    shortDesc: {
      en: "A planned reporting tool that combines sales, fees, costs, and refunds into structured financial summaries to support business analysis.",
      ar: "أداة تقارير مخطط لها تجمع المبيعات والرسوم والتكاليف والمبالغ المستردة في ملخصات مالية منظمة لدعم تحليل الأعمال."
    },
    fullDesc: {
      en: "This planned reporting solution consolidates disparate transaction records, marketplace commissions, logistics expenses, and refund adjustments. By joining and calculating net figures, it produces periodic financial digests in Google Sheets with clean categorization, giving operational managers clarity on realistic margins.",
      ar: "حل تقارير مخطط له يدمج بيانات المبيعات الفعلية، ورسوم المنصات، وتكاليف الشحن، ومعاملات الإرجاع في مكان واحد. من خلال دمج البيانات وحساب الأرقام الصافية، يولد النظام ملخصات مالية دورية في جداول Google Sheets بتصنيف واضح يتيح لأصحاب الأعمال معرفة الهوامش الحقيقية."
    },
    technologies: ["Python", "CSV", "Google Sheets", "Data Processing"],
    outcomes: {
      en: [
        "Unified aggregation of sales, costs, and fee structures.",
        "Automated consolidation from CSV and raw ledger exports.",
        "Clear financial summary tables ready for accounting review."
      ],
      ar: [
        "تجميع شامل للمبيعات والتكاليف وهياكل الرسوم في تقرير موحد.",
        "أتمتة استيراد ودمج ملفات CSV وسجلات الحسابات.",
        "جداول ملخصة واضحة ومعدة للمراجعة المحاسبية واتخاذ القرارات."
      ]
    }
  },
  {
    id: "clinic-management",
    category: "planned",
    status: "concept",
    badgeKey: "statusConcept",
    title: {
      en: "Smart Clinic Management System",
      ar: "نظام إدارة العيادات الذكي"
    },
    shortDesc: {
      en: "A proposed clinic management concept designed around patient intake, reception workflows, appointment coordination, notifications, and structured reports, with Arabic-first and right-to-left support.",
      ar: "تصور مقترح لنظام إدارة عيادة يشمل استقبال بيانات المرضى، وتنظيم إجراءات الاستقبال، وتنسيق المواعيد، والإشعارات، والتقارير المنظمة، مع دعم اللغة العربية واتجاه الكتابة من اليمين إلى اليسار."
    },
    fullDesc: {
      en: "A comprehensive proposed architectural concept created to solve clinic reception bottlenecks. Designed with an Arabic-first RTL interface, the concept outlines automated patient registration via webforms, automated confirmation reminders via messaging APIs, calendar coordination for practitioners, and structured daily attendance reports for clinic administration.",
      ar: "تصور معماري متكامل مقترح لمعالجة الاختناقات التشغيلية في مكاتب استقبال العيادات الطبية. صُمم المفهوم بواجهة عربية أصلية تدعم اتجاه اليمين إلى اليسار (RTL)، ويتضمن تسجيل بيانات المرضى عبر نماذج رقمية، وإرسال تنبيهات المواعيد آلياً عبر واجهات الرسائل، وتنسيق جداول الأطباء، وإعداد تقارير يومية منظمة لإدارة العيادة."
    },
    technologies: [
      "n8n",
      "Workflow Automation",
      "APIs",
      "Arabic RTL UI"
    ],
    outcomes: {
      en: [
        "Arabic-first workflow tailored for regional healthcare reception.",
        "Automated appointment synchronization and notifications.",
        "Reduction in patient wait times and administrative overhead."
      ],
      ar: [
        "مسار عمل عربي متكامل ومخصص لمكاتب الاستقبال في العيادات.",
        "تنسيق المواعيد والإشعارات التلقائية للمرضى.",
        "تقليل أوقات الانتظار والأعباء الإدارية اليدوية."
      ]
    }
  }
];

// ============================================================================
// 3. Application State & Storage Utilities
// ============================================================================
const STORAGE_KEYS = {
  LANG: 'portfolio_marwan_lang',
  THEME: 'portfolio_marwan_theme'
};

const safeStorage = {
  get(key, defaultValue) {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Storage unavailable or disabled
    }
  }
};

let currentLang = safeStorage.get(STORAGE_KEYS.LANG, 'en');
let currentTheme = safeStorage.get(STORAGE_KEYS.THEME, 'dark');

// ============================================================================
// 4. Bilingual & Localization Engine
// ============================================================================
function updateLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  safeStorage.set(STORAGE_KEYS.LANG, lang);

  const t = translations[lang];

  // Document Root Settings
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Update Page Title and Meta Description
  document.title = t.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.meta.description);

  // Update Language Switcher Button Text and ARIA
  const langTextEl = document.getElementById('lang-btn-text');
  const langBtn = document.getElementById('lang-switch-btn');
  if (langTextEl) langTextEl.textContent = (lang === 'en') ? 'العربية' : 'English';
  if (langBtn) {
    langBtn.setAttribute('aria-label', t.nav.switchLangAria);
    langBtn.setAttribute('title', t.nav.switchLangAria);
  }

  // Update all standard text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n');
    const value = getNestedValue(t, keyPath);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Update HTML elements (e.g., quotes with formatting)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n-html');
    const value = getNestedValue(t, keyPath);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  // Update attributes (placeholders, aria-labels, titles)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const rawAttrSpec = el.getAttribute('data-i18n-attr');
    // Spec format: "placeholder:contact.formNamePlaceholder|aria-label:contact.formNameLabel"
    rawAttrSpec.split('|').forEach(part => {
      const [attrName, keyPath] = part.split(':');
      if (attrName && keyPath) {
        const val = getNestedValue(t, keyPath);
        if (val !== undefined) {
          el.setAttribute(attrName, val);
        }
      }
    });
  });

  // Update Dynamic Projects Cards Content
  renderProjectCards();

  // Update Dynamic Year in Footer
  updateFooterYear();
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
}

// ============================================================================
// 5. Theme Toggle Engine (Dark / Light)
// ============================================================================
function updateTheme(theme) {
  currentTheme = theme;
  safeStorage.set(STORAGE_KEYS.THEME, theme);
  document.documentElement.setAttribute('data-theme', theme);

  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const ariaLabel = (theme === 'dark') ? 'Switch to light mode' : 'Switch to dark mode';

  if (themeBtn) {
    themeBtn.setAttribute('aria-label', ariaLabel);
    themeBtn.setAttribute('title', ariaLabel);
  }

  if (themeIcon) {
    // Show Moon in Light Mode (to switch to Dark), Sun in Dark Mode (to switch to Light)
    if (theme === 'light') {
      themeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    } else {
      themeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    }
  }
}

// ============================================================================
// 6. Project Cards Rendering & Category Filtering
// ============================================================================
let activeFilter = 'all';

function renderProjectCards() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const t = translations[currentLang];

  // Filter projects by category
  const filteredProjects = projectsData.filter(proj => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'automation') return proj.category === 'automation';
    if (activeFilter === 'data') return proj.category === 'data';
    if (activeFilter === 'planned') return proj.status === 'planned' || proj.status === 'concept';
    return true;
  });

  container.innerHTML = '';

  filteredProjects.forEach((proj, idx) => {
    const card = document.createElement('article');
    card.className = `project-card ${proj.status === 'live' ? 'featured-card' : ''} reveal revealed`;
    card.setAttribute('data-category', proj.category);

    const statusBadgeText = t.projects[proj.badgeKey] || proj.status;

    // Outcomes HTML for the live project
    let outcomesHtml = '';
    if (proj.status === 'live' && proj.outcomes) {
      const items = proj.outcomes[currentLang] || proj.outcomes.en;
      outcomesHtml = `
        <div class="project-outcomes-box">
          <div class="outcomes-title">${t.projects.outcomesTitle}</div>
          <div class="outcomes-list">
            ${items.map(item => `
              <div class="outcome-item">
                <span class="outcome-bullet">✓</span>
                <span>${item}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Technology Tags HTML
    const techTagsHtml = proj.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

    card.innerHTML = `
      <div class="card-top-bar">
        <span class="status-badge ${proj.status}">${statusBadgeText}</span>
        <span class="project-category-tag">${proj.category.toUpperCase()}</span>
      </div>
      <h3 class="project-title">${proj.title[currentLang] || proj.title.en}</h3>
      <p class="project-description">${proj.shortDesc[currentLang] || proj.shortDesc.en}</p>
      ${outcomesHtml}
      <div class="project-tech-tags">
        ${techTagsHtml}
      </div>
      <div class="card-footer">
        <button type="button" class="btn-details" data-project-id="${proj.id}">
          <span>${t.projects.btnDetails}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach click listeners to Details buttons
  container.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project-id');
      openProjectModal(projId);
    });
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      renderProjectCards();
    });
  });
}

// ============================================================================
// 7. Project Details Modal Dialog
// ============================================================================
function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const proj = projectsData.find(p => p.id === projectId);
  if (!proj) return;

  const t = translations[currentLang];
  const statusBadgeText = t.projects[proj.badgeKey] || proj.status;

  // Title & Status
  document.getElementById('modal-status-badge').className = `status-badge ${proj.status}`;
  document.getElementById('modal-status-badge').textContent = statusBadgeText;
  document.getElementById('modal-title').textContent = proj.title[currentLang] || proj.title.en;

  // Image Preview if available
  const imgContainer = document.getElementById('modal-image-preview');
  if (proj.previewImage) {
    imgContainer.innerHTML = `<img src="${proj.previewImage}" alt="${proj.title[currentLang] || proj.title.en} Workflow Diagram" loading="lazy" />`;
    imgContainer.style.display = 'block';
  } else {
    imgContainer.innerHTML = '';
    imgContainer.style.display = 'none';
  }

  // Description
  document.getElementById('modal-description').textContent = proj.fullDesc[currentLang] || proj.fullDesc.en;

  // Tech tags
  const techContainer = document.getElementById('modal-tech-list');
  techContainer.innerHTML = proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');

  // Outcomes list
  const outcomesContainer = document.getElementById('modal-outcomes-list');
  const outcomesTitle = document.getElementById('modal-outcomes-title');
  if (proj.outcomes) {
    outcomesTitle.style.display = 'block';
    outcomesContainer.style.display = 'flex';
    const items = proj.outcomes[currentLang] || proj.outcomes.en;
    outcomesContainer.innerHTML = items.map(it => `
      <div class="outcome-item">
        <span class="outcome-bullet">✓</span>
        <span>${it}</span>
      </div>
    `).join('');
  } else {
    outcomesTitle.style.display = 'none';
    outcomesContainer.style.display = 'none';
  }

  // Open modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Set focus on close button for accessibility
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModalHandlers() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const discussBtn = document.getElementById('modal-discuss-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  if (discussBtn) {
    discussBtn.addEventListener('click', () => {
      closeProjectModal();
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (modal) {
    // Close on overlay backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeProjectModal();
      }
    });
  }
}

// ============================================================================
// 8. Navigation, Mobile Menu & Scroll Tracking
// ============================================================================
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        navMenu.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Scroll Header Shadow & Active Link Highlight
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header background blur intensification
    if (header) {
      if (scrollPos > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Active Section Tracking
    const sections = document.querySelectorAll('section[id]');
    let currentActiveId = '';

    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        currentActiveId = sec.getAttribute('id');
      }
    });

    if (currentActiveId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentActiveId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }, { passive: true });
}

// ============================================================================
// 9. Contact Form Client-side Validation (Frontend Demo)
// ============================================================================
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const feedbackMsg = document.getElementById('form-feedback');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = translations[currentLang];
    let isValid = true;

    // Reset previous errors
    form.querySelectorAll('.form-group').forEach(grp => grp.classList.remove('has-error'));
    form.querySelectorAll('.form-input, .form-textarea').forEach(fld => fld.classList.remove('invalid'));

    // Validate Name
    if (!nameInput.value || nameInput.value.trim().length < 2) {
      const grp = nameInput.closest('.form-group');
      if (grp) {
        grp.classList.add('has-error');
        const errEl = grp.querySelector('.form-error');
        if (errEl) errEl.textContent = t.contact.errName;
      }
      nameInput.classList.add('invalid');
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value || !emailRegex.test(emailInput.value.trim())) {
      const grp = emailInput.closest('.form-group');
      if (grp) {
        grp.classList.add('has-error');
        const errEl = grp.querySelector('.form-error');
        if (errEl) errEl.textContent = t.contact.errEmail;
      }
      emailInput.classList.add('invalid');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value || messageInput.value.trim().length < 10) {
      const grp = messageInput.closest('.form-group');
      if (grp) {
        grp.classList.add('has-error');
        const errEl = grp.querySelector('.form-error');
        if (errEl) errEl.textContent = t.contact.errMessage;
      }
      messageInput.classList.add('invalid');
      isValid = false;
    }

    if (!isValid) {
      if (feedbackMsg) feedbackMsg.style.display = 'none';
      return;
    }

    // Display clear bilingual submission notice explaining that this is a frontend demo
    if (feedbackMsg) {
      feedbackMsg.className = 'form-feedback-message success';
      feedbackMsg.textContent = t.contact.successMsg;
      feedbackMsg.style.display = 'block';
    }

    // Reset form inputs after successful client validation
    form.reset();
  });
}

// ============================================================================
// 10. Scroll-Triggered Reveal Animations (IntersectionObserver)
// ============================================================================
function initRevealAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));
}

// ============================================================================
// 11. Profile Image Fallback Handler
// ============================================================================
function initProfileImageFallback() {
  const profileImg = document.getElementById('profile-img');
  const fallbackBox = document.getElementById('profile-fallback');

  if (profileImg && fallbackBox) {
    profileImg.addEventListener('error', () => {
      profileImg.style.display = 'none';
      fallbackBox.style.display = 'flex';
    });

    profileImg.addEventListener('load', () => {
      // If loaded successfully, ensure image is visible
      profileImg.style.display = 'block';
      fallbackBox.style.display = 'none';
    });
  }
}

// ============================================================================
// 12. Dynamic Footer Year Calculation
// ============================================================================
function updateFooterYear() {
  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = currentYear.toString();
  }

  const copyrightTextEl = document.getElementById('footer-copyright-text');
  if (copyrightTextEl) {
    const rawTemplate = translations[currentLang].footer.copyright;
    copyrightTextEl.textContent = rawTemplate.replace('{year}', currentYear.toString());
  }
}

// ============================================================================
// 13. Initialization Entrypoint
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme
  updateTheme(currentTheme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextTheme = (currentTheme === 'dark') ? 'light' : 'dark';
      updateTheme(nextTheme);
    });
  }

  // Initialize Language
  updateLanguage(currentLang);
  const langBtn = document.getElementById('lang-switch-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = (currentLang === 'en') ? 'ar' : 'en';
      updateLanguage(nextLang);
    });
  }

  // Initialize Components
  initNavigation();
  initProjectFilters();
  initModalHandlers();
  initContactForm();
  initProfileImageFallback();
  initRevealAnimations();
  updateFooterYear();
});


// ============================================================================
// 14. 3D Code Canvas Background — Floating code chars + depth particles
// ============================================================================
(function initCodeCanvas() {
  const canvas = document.getElementById('code-canvas');
  if (!canvas) return;

  // Respect reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let W, H, animFrame;
  let particles = [];
  let codeStreams = [];

  // Code snippets that float in 3D space
  const codeSnippets = [
    'n8n.connect()', 'fetch(apiUrl)', 'JSON.parse()', '.then(res =>', 'async/await',
    'OAuth2.0', 'SP-API', 'webhook.on()', 'data.map()', 'if(error){retry()}',
    'curl -X POST', 'Authorization:', 'Bearer Token', 'csv.write()', 'sheet.append()',
    'workflow.run()', 'node.execute()', 'response.data', 'headers: {}', 'status: 200',
    'for(let i=0', 'try { }', 'catch(e) {}', 'return data', 'console.log()',
    'import os', 'import json', 'requests.get()', 'df.to_csv()', 'pd.read()',
    'git commit -m', 'docker run', 'ssh ubuntu@', 'crontab -e', 'python3 main.py',
    '{ "key": val }', '[]=>filter()', 'Promise.all()', 'await sleep()', '.trim()',
    'LWA_TOKEN', 'refreshToken()', 'getOrders()', 'getFinancials()', 'settlement',
  ];

  // Symbols that rain vertically (Matrix-style but subtle)
  const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]()<>=+-*/&|;:'.split('');

  // Color palette matching site theme
  const goldColors = [
    'rgba(212, 175, 55, ',   // primary gold
    'rgba(245, 215, 127, ',  // light gold
    'rgba(180, 140, 30, ',   // dark gold
    'rgba(80, 200, 140, ',   // accent green
  ];

  // ── 3D Floating Particle ──────────────────────────────────────────────────
  class Particle3D {
    constructor() { this.reset(); }

    reset() {
      this.x = (Math.random() - 0.5) * 2200;
      this.y = (Math.random() - 0.5) * 1400;
      this.z = Math.random() * 1800 + 200;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.vz = -Math.random() * 1.8 - 0.3;
      this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      this.colorBase = goldColors[Math.floor(Math.random() * goldColors.length)];
      this.life = 1;
      this.size = Math.random() * 4 + 8; // base font size before perspective
      this.type = Math.random() > 0.35 ? 'code' : 'dot';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.z += this.vz;

      // Fade in/out based on Z depth
      if (this.z < 80) this.life -= 0.025;
      if (this.z < 0 || this.life <= 0) this.reset();
    }

    project() {
      const fov = 700;
      const scale = fov / (fov + this.z);
      const px = this.x * scale + W / 2;
      const py = this.y * scale + H / 2;
      return { px, py, scale };
    }

    draw(ctx) {
      const { px, py, scale } = this.project();
      if (px < -80 || px > W + 80 || py < -50 || py > H + 50) return;

      const alpha = Math.min(this.life, scale * 1.2) * 0.75;
      if (alpha <= 0.02) return;

      if (this.type === 'code') {
        const fs = Math.max(8, this.size * scale * 1.6);
        ctx.font = `500 ${fs}px 'Space Grotesk', monospace`;
        ctx.fillStyle = `${this.colorBase}${(alpha * 0.85).toFixed(2)})`;
        ctx.fillText(this.text, px, py);
      } else {
        const r = Math.max(1, 2.5 * scale);
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorBase}${alpha.toFixed(2)})`;
        ctx.fill();
      }
    }
  }

  // ── Vertical Matrix Stream ─────────────────────────────────────────────────
  class MatrixStream {
    constructor() { this.reset(); }

    reset() {
      this.x = Math.random() * W;
      this.y = -Math.random() * H;
      this.speed = Math.random() * 1.2 + 0.6;
      this.chars = Array.from({ length: Math.floor(Math.random() * 14 + 6) }, () =>
        matrixChars[Math.floor(Math.random() * matrixChars.length)]
      );
      this.spacing = 16;
      this.alpha = Math.random() * 0.18 + 0.04;
      this.colorBase = goldColors[Math.floor(Math.random() * 2)]; // only gold tones for streams
      this.tickCounter = 0;
      this.tickLimit = Math.floor(Math.random() * 8 + 4);
    }

    update() {
      this.y += this.speed;
      this.tickCounter++;
      if (this.tickCounter >= this.tickLimit) {
        // Randomly shuffle one character
        const idx = Math.floor(Math.random() * this.chars.length);
        this.chars[idx] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        this.tickCounter = 0;
      }
      if (this.y > H + this.chars.length * this.spacing + 100) {
        this.reset();
        this.x = Math.random() * W;
        this.y = -100;
      }
    }

    draw(ctx) {
      ctx.font = '12px monospace';
      this.chars.forEach((ch, i) => {
        const cy = this.y + i * this.spacing;
        if (cy < -10 || cy > H + 10) return;
        const fadeFactor = 1 - i / this.chars.length;
        const a = this.alpha * fadeFactor;
        // Lead char (brightest)
        if (i === 0) {
          ctx.fillStyle = `rgba(245, 215, 127, ${Math.min(a * 3.5, 0.55)})`;
        } else {
          ctx.fillStyle = `${this.colorBase}${(a).toFixed(3)})`;
        }
        ctx.fillText(ch, this.x, cy);
      });
    }
  }

  // ── Connection Lines Between Close Particles ───────────────────────────────
  function drawConnections(particles) {
    const maxDist = 140;
    for (let i = 0; i < particles.length; i++) {
      const { px: ax, py: ay, scale: sa } = particles[i].project();
      for (let j = i + 1; j < particles.length; j++) {
        if (particles[j].type !== 'dot' || particles[i].type !== 'dot') continue;
        const { px: bx, py: by } = particles[j].project();
        const dx = ax - bx, dy = ay - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * sa * 0.3;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = `rgba(212, 175, 55, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  // ── Setup & Resize ─────────────────────────────────────────────────────────
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function init() {
    resize();

    particles = Array.from({ length: 72 }, () => new Particle3D());
    // Scatter z values so they're not all at same depth at start
    particles.forEach(p => { p.z = Math.random() * 1800 + 50; });

    codeStreams = Array.from({ length: 18 }, () => {
      const s = new MatrixStream();
      s.y = Math.random() * H; // spread them out initially
      return s;
    });
  }

  // ── Animation Loop ─────────────────────────────────────────────────────────
  function loop() {
    ctx.clearRect(0, 0, W, H);

    // Draw matrix streams (background layer)
    codeStreams.forEach(s => { s.update(); s.draw(ctx); });

    // Draw connection lines between dot particles
    drawConnections(particles);

    // Draw 3D floating code particles (foreground layer)
    // Sort by Z depth (farthest first = painter's algorithm)
    const sorted = [...particles].sort((a, b) => b.z - a.z);
    sorted.forEach(p => { p.update(); p.draw(ctx); });

    animFrame = requestAnimationFrame(loop);
  }

  // ── Visibility Pause / Resume (performance) ────────────────────────────────
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animFrame);
    } else {
      loop();
    }
  });

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animFrame);
    resize();
    // Reposition streams on resize
    codeStreams.forEach(s => { s.x = Math.random() * W; });
    loop();
  }, { passive: true });

  // ── Theme-aware opacity ────────────────────────────────────────────────────
  function syncCanvasOpacity() {
    const theme = document.documentElement.getAttribute('data-theme');
    canvas.style.opacity = theme === 'light' ? '0.18' : '0.55';
  }
  syncCanvasOpacity();

  // Watch for theme changes
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      setTimeout(syncCanvasOpacity, 50);
    });
  }

  init();
  loop();
})();
