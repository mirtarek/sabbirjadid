/* ════════════════════════════════════════
   SABBIR JADID — Portfolio Script
   ════════════════════════════════════════ */

'use strict';

// ─── Books Data ───────────────────────────────────────────────────────────────
const BOOKS = [
  {
    title:  'পিতামহ',
    url:    'https://rkmri.co/Sp0Te3MAT2eN/',
    img:    'images/book1.png',
    synopsisBn: 'ষষ্ঠ শতকের অগ্নিগর্ভ আরব, গোত্রীয় দাঙ্গা এবং হস্তিবাহিনীর কাবা আক্রমণের শ্বাসরুদ্ধকর ইতিহাস এখানে মনোরম গদ্যে ফুটে উঠেছে। দেড় হাজার বছর আগের সেই অন্ধকারাচ্ছন্ন আরবের রোমাঞ্চকর ইতিহাস জানতে আজই পাঠ করুন বইটি।',
    synopsisEn: 'The breathtaking history of 6th century Arabia, tribal conflicts, and the elephant army\'s attack on the Kaaba unfolds in beautiful prose. Read the book today to learn the thrilling history of Arabia fifteen hundred years ago.',
  },
  {
    title:  'আজাদির সন্তান',
    url:    'https://rkmri.co/ARMe22emM5ee/',
    img:    'images/book2.png',
    synopsisBn: 'ভূস্বর্গ কাশ্মীরের শত বছরের বঞ্চনা, রাজনৈতিক বিরোধ ও রক্তক্ষয়ী স্বাধীনতা সংগ্রামের ইতিহাস ফুটে উঠেছে। আদনান ফাইয়াজ ও মারিয়ামের মর্মন্তুদ গল্পের মধ্য দিয়ে বইটিতে কাশ্মীরের ভূমিপুত্রদের আত্মত্যাগ এবং আগ্রাসনের করুণ বাস্তব চিত্র তুলে ধরা হয়েছে।',
    synopsisEn: 'A century of Kashmir\'s deprivation, political conflicts, and the bloody freedom struggle unfolds through the poignant story of Adnan Faiyaz and Maryam, depicting the sacrifice and cruel reality of Kashmir\'s native sons.',
  },
  {
    title:  'গোত্রহীনের ইতিকথা',
    url:    'https://rkmri.co/pSASESRTRemM/',
    img:    'images/book3.png',
    synopsisBn: 'কথাসাহিত্যিক মানিকের বেদনাবিধুর, নিঃস্ব ও বিপ্লবী জীবনের ওপর ভিত্তি করে রচিত। এটি কোনো সাধারণ জীবনী বা ডকুফিকশন নয়; বরং মানিকের ইস্পাতকঠিন ও সংগ্রামমুখর আস্ত জীবনকে ভেঙেচুরে এক বিশুদ্ধ ফিকশনের রূপ দেওয়া হয়েছে।',
    synopsisEn: 'Written based on the sorrowful, destitute, and revolutionary life of the author Manik. Not a mere biography, but Manik\'s steel-like, struggle-filled life has been transformed into the form of pure fiction.',
  },
  {
    title:  'বাংলাদেশ এন্টারপ্রাইজ',
    url:    'https://rkmri.co/ee3ASM0SpeMA/',
    img:    'images/book4.png',
    synopsisBn: 'বাংলাদেশ এন্টারপ্রাইজ লেখকের দ্বিতীয় গল্পবই, যেখানে বাংলাদেশ ও এর মানুষদের নিয়ে রচিত বিভিন্ন গল্প স্থান পেয়েছে। প্রচলিত নিয়মের বাইরে গিয়ে পাঠকদের এখানে আগে গল্পটি পড়তে হবে, আর গল্পের নাম জানা যাবে একদম শেষে।',
    synopsisEn: 'The author\'s second story book, featuring various stories about Bangladesh and its people. Unusually, the reader must read the story first, and the story\'s name is revealed only at the very end.',
  },
  {
    title:  'একটি গোলাপের জন্য',
    url:    'https://rkmri.co/3SSpAyeMMIpM/',
    img:    'images/book5.png',
    synopsisBn: 'চব্বিশের ঐতিহাসিক গণঅভ্যুত্থান এবং এর পেছনের প্রেক্ষাপটকে নিপুণভাবে তুলে ধরা হয়েছে। জুলাই-আগস্টের নৃশংসতা এবং দেশের জন্য সাধারণ মানুষের আত্মত্যাগের মর্মস্পর্শী চিত্র এখানে গল্পের সুষমায় মূর্ত হয়ে উঠেছে।',
    synopsisEn: 'The historic mass uprising of \'24 and its backdrop are skillfully depicted. The atrocities of July-August and the poignant sacrifice of ordinary people for the nation come alive through the grace of storytelling.',
  },
  {
    title:  'জীবনঘড়ি',
    url:    'https://rkmri.co/AyAoA5EReR3R/',
    img:    'images/book6.png',
    synopsisBn: 'সোবহান সাহেব ও তার চার সন্তানকে ঘিরে আবর্তিত এক বেদনাবিধুর পারিবারিক গল্প জীবনঘুড়ি। বাবা-মায়ের বোনা স্বপ্নের কক্ষপথ থেকে সন্তানদের একে একে ছিটকে পড়া এবং রূঢ় বাস্তবতার আঘাতে একটি পরিবারের স্বপ্নভঙ্গের করুণ চিত্র এখানে ফুটে উঠেছে।',
    synopsisEn: 'A sorrowful family story revolving around Sobhan Saheb and his four children — the painful picture of children drifting one by one from the orbit of their parents\' dreams, broken by harsh reality.',
  },
  {
    title:  'দুই পৃথিবীর সূর্য',
    url:    'https://rkmri.co/poSMeeepSNpS/',
    img:    'images/book7.png',
    synopsisBn: 'জাদুবাস্তবতার আবরণে মৃত দাদাজানের সাথে তামিমের এক আধ্যাত্মিক সফরের মধ্য দিয়ে উঠে এসেছে একাত্তরের গৌরব ও রক্তাক্ত ক্ষতচিহ্নের ইতিহাস। অতীত ও বর্তমানের এই অস্থির খোঁড়াখুঁড়ির মাঝেই গল্পে হঠাৎ নেমে আসে বাংলাদেশের জুলাইয়ের কান্না ও রক্তের আরেক চিরন্তন অধ্যায়।',
    synopsisEn: 'Through a magical-realist spiritual journey with his deceased grandfather, Tamim uncovers the glory and bloody wounds of 1971. Into this unquiet excavation of past and present falls another eternal chapter of Bangladesh\'s July tears and blood.',
  },
  {
    title:  'পাপ',
    url:    'https://rkmri.co/ETRMRmeAITMA/',
    img:    'images/book8.png',
    synopsisBn: 'আবির ও শিপ্রার জীবনের এক বিশেষ মুহূর্তকে কেন্দ্র করে এগিয়েছে এই গল্প। বিয়ের ভারী বেনারসি শাড়ি পরে প্রথমবারের মতো দৌড়াতে গিয়ে শিপ্রার যে বিড়ম্বনা ও প্রতিকূলতার মুখোমুখি হতে হয়, তারই এক জীবন্ত চিত্র এখানে ফুটে উঠেছে।',
    synopsisEn: 'This story revolves around a special moment in the lives of Abir and Shipra. It vividly portrays the embarrassment and adversity Shipra faces when, wearing a heavy bridal Benarosi saree, she tries to run for the first time.',
  },
  {
    title:  'ভাঙনের দিন',
    url:    'https://rkmri.co/yyyAIeAMpM3E/',
    img:    'images/book9.png',
    synopsisBn: 'দীর্ঘ চৌদ্দ বছর কারাবাস শেষে ফয়সাল যখন চেনা পৃথিবীতে ফিরে আসে, তখন সে আবিষ্কার করে সমাজ ও সম্পর্কের সংজ্ঞাই বদলে গেছে। পরিবর্তিত সময়ের এই অচেনা রূপের সাথে নিজেকে মানিয়ে নেওয়ার নিদারুণ দ্বন্দ্ব এবং গভীর জীবন-যন্ত্রণার এক অনন্য আখ্যান এই উপন্যাস।',
    synopsisEn: 'After fourteen long years in prison, when Faisal returns to the world he knew, he discovers that the very definition of society and relationships has changed. This novel is a unique narrative of bitter conflict and deep life-pain in adapting to an unfamiliar changed world.',
  },
  {
    title:  'রুদ্ধ হাওয়ার দিন',
    url:    'https://rkmri.co/5lIe3ollM223/',
    img:    'images/book10.png',
    synopsisBn: 'সহজ ভাষায় সমাজের কঠিন বাস্তবতা, দুর্নীতি ও অসংগতিকে তীব্রভাবে ব্যঙ্গ করে রচিত হয়েছে এই বইয়ের দশটি ছোটগল্প। গল্পের নিটোল আখ্যানে পাঠক বিষণ্ণতা ও হাহাকারের মুখোমুখি হলেও, সেই হতাশার গভীরেই সুপ্ত থাকে নতুন কোনো স্বপ্নের বীজ।',
    synopsisEn: 'Ten short stories that sharply satirize the harsh realities of society, corruption, and inconsistencies in simple language. Though readers face gloom and anguish in the stories\' neat narratives, deep within that despair lies the seed of a new dream.',
  },
  {
    title:  'একটি শোক সংবাদ',
    url:    'https://rkmri.co/lmyElmNpMpTe/',
    img:    'images/book11.png',
    synopsisBn: 'প্রযুক্তির চরম উন্নতি আর ক্যাপিটালিস্ট সমাজের জাঁতাকলে পিষ্ট বর্তমান সময়ের জটিলতা ও মানুষের বিচ্ছিন্নতা নিয়ে রচিত হয়েছে \'একটি শোক সংবাদ\'। মনোজগতের বিচিত্র অভিজ্ঞতা, ব্যক্তিগত মন-বেদনা এবং যাপনের নানা সংকট এ বইয়ের গল্পগুলোতে অনন্য গদ্যশৈলীতে ফুটে উঠেছে।',
    synopsisEn: 'A book about the complexities of the present time and human alienation, crushed under the extreme advance of technology and the capitalist mill. Diverse experiences of the mind, personal suffering, and various crises of existence emerge in a unique prose style.',
  },
  {
    title:  'প্রজ্ঞায় যার উজালা জগৎ',
    url:    'https://rkmri.co/0Remm3AeTlMe/',
    img:    'images/book12.png',
    synopsisBn: 'বিশ্বের ইতিহাসের সবচেয়ে প্রজ্ঞাবান ও মেধাবী ব্যক্তিত্ব মুহাম্মদুর রাসূলুল্লাহ (সা.)-এর বর্ণাঢ্য জীবনের নানা দিক নিয়ে রচিত হয়েছে এই গ্রন্থ। মাত্র ২৩ বছরের রিসালাতি জীবনে তিনি যেভাবে নিজ মেধা ও বিচক্ষণতা দিয়ে পৃথিবীকে বদলে দিয়েছিলেন, তাঁর সেই প্রজ্ঞা ও বুদ্ধিমত্তার গল্পগুলোই এখানে চমৎকার বর্ণনায় তুলে ধরা হয়েছে।',
    synopsisEn: 'Written about various aspects of the life of the most wise and gifted personality in world history, Muhammad the Messenger of Allah (PBUH). The stories of his wisdom and intelligence — how he changed the world with his intellect in just 23 years of prophethood — are wonderfully narrated here.',
  },
];

// ─── Language State ───────────────────────────────────────────────────────────
let currentLang = 'bn';

// ─── DOM Ready ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  initNavbar();
  initLangToggle();
  initHamburger();
  initLoginModal();
  initContactForm();
  initScrollAnimations();
});

// ─── Render All Books ─────────────────────────────────────────────────────────
function renderBooks() {
  const grid = document.getElementById('booksGrid');
  if (!grid) return;

  grid.innerHTML = BOOKS.map((book, idx) => `
    <article class="book-card" data-index="${idx}">
      <div class="book-card-img">
        <img src="${book.img}" alt="${book.title}" loading="lazy" />
      </div>
      <div class="book-card-body">
        <span class="book-card-num">${String(idx + 1).padStart(2, '0')}</span>
        <h3 class="book-card-title">${book.title}</h3>
        <p class="book-card-synopsis"
           data-bn="${escapeHtml(book.synopsisBn)}"
           data-en="${escapeHtml(book.synopsisEn)}">
          ${currentLang === 'bn' ? book.synopsisBn : book.synopsisEn}
        </p>
        <a href="${book.url}"
           target="_blank"
           rel="noopener noreferrer"
           class="rokomari-btn"
           data-bn="রকমারি থেকে কিনুন"
           data-en="Buy from Rokomari">
          ${currentLang === 'bn' ? 'রকমারি থেকে কিনুন' : 'Buy from Rokomari'}
        </a>
      </div>
    </article>
  `).join('');
}

// ─── Navbar Scroll Effect ─────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  // scroll shadow
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveLink(sections, navLinks);
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // smooth-close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('hamburger').classList.remove('open');
    });
  });
}

function highlightActiveLink(sections, links) {
  let current = '';
  const scrollY = window.scrollY + 120;

  sections.forEach(sec => {
    if (sec.offsetTop <= scrollY) {
      current = sec.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').slice(1);
    if (href === current) link.classList.add('active');
  });
}

// ─── Language Toggle ──────────────────────────────────────────────────────────
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'bn' ? 'en' : 'bn';
    btn.textContent = currentLang === 'bn' ? 'EN' : 'বাং';
    applyTranslations();
    renderBooks(); // re-render dynamic content
  });
}

function applyTranslations() {
  // All elements with data-bn / data-en attributes
  document.querySelectorAll('[data-bn]').forEach(el => {
    const val = currentLang === 'bn' ? el.dataset.bn : el.dataset.en;
    if (val !== undefined) el.textContent = val;
  });

  // Placeholder translations
  document.querySelectorAll('[data-placeholder-bn]').forEach(el => {
    el.placeholder = currentLang === 'bn' ? el.dataset.placeholderBn : el.dataset.placeholderEn;
  });

  // <html> lang attribute
  document.documentElement.lang = currentLang === 'bn' ? 'bn' : 'en';
}

// ─── Hamburger / Mobile Nav ───────────────────────────────────────────────────
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('navLinks');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

// ─── Login Modal ──────────────────────────────────────────────────────────────
function initLoginModal() {
  const modal       = document.getElementById('loginModal');
  const openBtn     = document.getElementById('loginBtn');
  const closeBtn    = document.getElementById('modalClose');
  const submitBtn   = document.getElementById('loginSubmit');
  if (!modal) return;

  openBtn.addEventListener('click', () => modal.classList.add('active'));
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') modal.classList.remove('active');
  });

  submitBtn.addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value.trim();
    const pass  = document.getElementById('loginPass').value.trim();
    if (!email || !pass) {
      alert(currentLang === 'bn' ? 'অনুগ্রহ করে সকল তথ্য পূরণ করুন।' : 'Please fill in all fields.');
      return;
    }
    alert(currentLang === 'bn'
      ? `স্বাগতম! আপনি সফলভাবে লগইন করেছেন।\nইমেইল: ${email}`
      : `Welcome! You have successfully logged in.\nEmail: ${email}`);
    modal.classList.remove('active');
  });
}

// ─── Contact Form (Web3Forms) ─────────────────────────────────────────────────
function initContactForm() {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn');

    btn.disabled = true;
    btn.textContent = currentLang === 'bn' ? 'পাঠানো হচ্ছে...' : 'Sending...';
    status.className = 'form-status';
    status.style.display = 'none';

    try {
      const data = new FormData(form);
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body:   data,
      });
      const json = await res.json();

      if (json.success) {
        status.className = 'form-status success';
        status.textContent = currentLang === 'bn'
          ? '✓ আপনার বার্তা সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।'
          : '✓ Your message has been sent successfully! Thank you.';
        form.reset();
      } else {
        throw new Error(json.message || 'Failed');
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = currentLang === 'bn'
        ? '✗ বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
        : '✗ There was a problem sending your message. Please try again.';
    } finally {
      btn.disabled = false;
      btn.textContent = currentLang === 'bn' ? 'বার্তা পাঠান' : 'Send Message';
    }
  });
}

// ─── Scroll Animations (Intersection Observer) ────────────────────────────────
function initScrollAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.65s ease, transform 0.65s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);

  // Add reveal classes to target elements
  const targets = [
    { sel: '.featured-card',     delay: true  },
    { sel: '.book-card',         delay: false },
    { sel: '.section-header',    delay: false },
    { sel: '.contact-info',      delay: false },
    { sel: '.contact-form',      delay: false },
    { sel: '.dev-image-wrap',    delay: false },
    { sel: '.dev-info',          delay: false },
    { sel: '.coming-inner',      delay: false },
    { sel: '.fb-page-container', delay: false },
  ];

  targets.forEach(({ sel, delay }) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      if (delay && i < 3) el.classList.add(`reveal-delay-${i + 1}`);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Utility ──────────────────────────────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
