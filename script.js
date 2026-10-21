/* ==========================================================
   INÈS LUXEA DÉCO
   BILINGUAL WEBSITE — FR / EN
   Shared JavaScript
========================================================== */

"use strict";

/* ==========================================================
   TRANSLATIONS
========================================================== */

const translations = {

  fr: {

    /* GENERAL */

    homePageTitle:
      "INÈS LUXEA DÉCO | Décoration événementielle",

    metaDescription:
      "INÈS LUXEA DÉCO — Décoration événementielle élégante et sur mesure pour vos plus beaux moments.",

    brandSubtitle:
      "DÉCORATION ÉVÉNEMENTIELLE",

    requestQuote:
      "Demander un devis",

    /* NAVIGATION */

    navHome: "Accueil",
    navAbout: "À propos",
    navServices: "Prestations",
    navPortfolio: "Réalisations",
    navContact: "Contact",

    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    primaryNavigation: "Navigation principale",
    footerNavigation: "Navigation de pied de page",
    languageChoice: "Choix de la langue",

    /* HERO */

    heroEyebrow:
      "L'ART DE SUBLIMER VOS MOMENTS",

    heroLineOne:
      "L'élégance",

    heroLineTwo:
      "de vos événements,",

    heroLineThree:
      "l'exception de chaque détail.",

    heroDescription:
      "Des décors raffinés et des créations sur mesure pour transformer vos instants précieux en souvenirs inoubliables.",

    discoverUniverse:
      "Découvrir notre univers",

    scrollToDiscover:
      "Découvrir la suite",

    /* ABOUT */

    aboutEyebrow:
      "BIENVENUE DANS NOTRE UNIVERS",

    aboutTitleOne:
      "Une décoration sur mesure",

    aboutTitleTwo:
      "pour vos plus beaux moments",

    aboutParagraphOne:
      "Chez INÈS LUXEA DÉCO, chaque événement est une histoire unique qui mérite une mise en scène exceptionnelle.",

    aboutParagraphTwo:
      "Nous imaginons des ambiances élégantes, harmonieuses et personnalisées, où chaque détail reflète vos envies et sublime vos émotions.",

    aboutImageAlt:
      "Décoration florale raffinée pour un événement",

    learnMore:
      "En savoir plus",

    /* SERVICES */

    servicesEyebrow:
      "NOS PRESTATIONS",

    servicesTitleOne:
      "Des événements",

    servicesTitleTwo:
      "d'exception",

    servicesIntroduction:
      "Des créations pensées avec passion pour donner vie à vos plus belles célébrations.",

    /* WEDDING */

    weddingTitle:
      "Mariages et réceptions",

    weddingDescription:
      "Des décors romantiques et sophistiqués, imaginés pour célébrer votre amour.",

    weddingImageAlt:
      "Décoration de mariage élégante",

    /* BIRTHDAY */

    birthdayTitle:
      "Anniversaires élégants",

    birthdayDescription:
      "Des ambiances festives et raffinées, créées autour de votre personnalité.",

    birthdayImageAlt:
      "Décoration d'anniversaire avec ballons élégants",

    /* BAPTISM */

    baptismTitle:
      "Baptêmes et fêtes familiales",

    baptismDescription:
      "Des compositions délicates pour partager des moments précieux en famille.",

    baptismImageAlt:
      "Décoration de baptême douce et élégante",

    /* PRIVATE / CORPORATE */

    eventsTitle:
      "Événements privés et professionnels",

    eventsDescription:
      "Des scénographies élégantes pour vos événements privés et professionnels.",

    eventsImageAlt:
      "Décoration d'événement privé et professionnel",

    exploreServices:
      "Découvrir toutes nos prestations",

    /* QUOTATION */

    quoteEyebrow:
      "CRÉONS ENSEMBLE VOTRE ÉVÉNEMENT",

    quoteTitleOne:
      "Chaque détail",

    quoteTitleTwo:
      "fait la différence",

    quoteDescription:
      "Confiez-nous vos envies et imaginons ensemble une décoration qui vous ressemble.",

    /* VALUES */

    valueElegance: "Élégance",
    valueCreativity: "Créativité",
    valuePassion: "Passion",
    valueExcellence: "Excellence",

    /* FOOTER */

    footerContactTitle:
      "Parlons de votre événement",

    rightsReserved:
      "Tous droits réservés.",

    developedBy:
      "Site développé par"

  },

  en: {

    /* GENERAL */

    homePageTitle:
      "INÈS LUXEA DÉCO | Luxury Event Decoration",

    metaDescription:
      "INÈS LUXEA DÉCO — Elegant, bespoke event decoration for life's most beautiful moments.",

    brandSubtitle:
      "EVENT DECORATION",

    requestQuote:
      "Request a Quote",

    /* NAVIGATION */

    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navPortfolio: "Our Work",
    navContact: "Contact",

    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNavigation: "Main navigation",
    footerNavigation: "Footer navigation",
    languageChoice: "Choose language",

    /* HERO */

    heroEyebrow:
      "THE ART OF ELEVATING YOUR MOMENTS",

    heroLineOne:
      "The elegance",

    heroLineTwo:
      "of your events,",

    heroLineThree:
      "the beauty of every detail.",

    heroDescription:
      "Refined decorations and bespoke creations that transform your precious moments into unforgettable memories.",

    discoverUniverse:
      "Discover Our World",

    scrollToDiscover:
      "Discover more",

    /* ABOUT */

    aboutEyebrow:
      "WELCOME TO OUR WORLD",

    aboutTitleOne:
      "Bespoke decorations",

    aboutTitleTwo:
      "for your most beautiful moments",

    aboutParagraphOne:
      "At INÈS LUXEA DÉCO, every event tells a unique story that deserves an exceptional setting.",

    aboutParagraphTwo:
      "We create elegant, harmonious and personalized atmospheres, where every detail reflects your vision and enhances your emotions.",

    aboutImageAlt:
      "Refined floral decoration for an event",

    learnMore:
      "Learn More",

    /* SERVICES */

    servicesEyebrow:
      "OUR SERVICES",

    servicesTitleOne:
      "Exceptional",

    servicesTitleTwo:
      "events",

    servicesIntroduction:
      "Passionately designed creations that bring your most beautiful celebrations to life.",

    /* WEDDING */

    weddingTitle:
      "Weddings & Receptions",

    weddingDescription:
      "Romantic and sophisticated settings, thoughtfully designed to celebrate your love.",

    weddingImageAlt:
      "Elegant wedding decoration",

    /* BIRTHDAY */

    birthdayTitle:
      "Elegant Birthdays",

    birthdayDescription:
      "Festive and refined atmospheres created around your personality.",

    birthdayImageAlt:
      "Elegant birthday decoration with balloons",

    /* BAPTISM */

    baptismTitle:
      "Baptisms & Family Celebrations",

    baptismDescription:
      "Delicate arrangements for sharing precious moments with your loved ones.",

    baptismImageAlt:
      "Soft and elegant baptism decoration",

    /* PRIVATE / CORPORATE */

    eventsTitle:
      "Private & Corporate Events",

    eventsDescription:
      "Elegant event styling for private celebrations and professional occasions.",

    eventsImageAlt:
      "Private and corporate event decoration",

    exploreServices:
      "Explore All Our Services",

    /* QUOTATION */

    quoteEyebrow:
      "LET'S CREATE YOUR EVENT TOGETHER",

    quoteTitleOne:
      "Every detail",

    quoteTitleTwo:
      "makes a difference",

    quoteDescription:
      "Share your vision with us and let's create decorations that truly reflect you.",

    /* VALUES */

    valueElegance: "Elegance",
    valueCreativity: "Creativity",
    valuePassion: "Passion",
    valueExcellence: "Excellence",

    /* FOOTER */

    footerContactTitle:
      "Let's Talk About Your Event",

    rightsReserved:
      "All rights reserved.",

    developedBy:
      "Website developed by"

  }

};


/* ==========================================================
   LANGUAGE MANAGEMENT
========================================================== */

const LANGUAGE_STORAGE_KEY = "inesLanguage";

let currentLanguage = "fr";


function getSavedLanguage() {

  try {

    const saved = localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    );

    return saved === "en" ? "en" : "fr";

  } catch (error) {

    return "fr";

  }

}


function saveLanguage(language) {

  try {

    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      language
    );

  } catch (error) {

    // Website continues working if storage is unavailable.

  }

}


function translateElement(element, language) {

  const key = element.dataset.i18n;

  const translatedText =
    translations[language][key];

  if (typeof translatedText === "string") {

    element.textContent = translatedText;

  }

}


function applyLanguage(language) {

  const selectedLanguage =
    language === "en" ? "en" : "fr";

  currentLanguage = selectedLanguage;

  document.documentElement.lang =
    selectedLanguage;

  /* Translate visible text */

  document.querySelectorAll(
    "[data-i18n]"
  ).forEach(element => {

    translateElement(
      element,
      selectedLanguage
    );

  });

  /* Translate image alt text */

  document.querySelectorAll(
    "[data-i18n-alt]"
  ).forEach(element => {

    const key = element.dataset.i18nAlt;

    const value =
      translations[selectedLanguage][key];

    if (typeof value === "string") {

      element.setAttribute(
        "alt",
        value
      );

    }

  });

  /* Translate accessibility labels */

  document.querySelectorAll(
    "[data-i18n-aria-label]"
  ).forEach(element => {

    const key =
      element.dataset.i18nAriaLabel;

    const value =
      translations[selectedLanguage][key];

    if (typeof value === "string") {

      element.setAttribute(
        "aria-label",
        value
      );

    }

  });

  /* Translate metadata */

  document.querySelectorAll(
    "[data-i18n-content]"
  ).forEach(element => {

    const key =
      element.dataset.i18nContent;

    const value =
      translations[selectedLanguage][key];

    if (typeof value === "string") {

      element.setAttribute(
        "content",
        value
      );

    }

  });

  /* Update language buttons */

  document.querySelectorAll(
    ".language-btn"
  ).forEach(button => {

    const isActive =
      button.dataset.lang === selectedLanguage;

    button.classList.toggle(
      "active",
      isActive
    );

    button.setAttribute(
      "aria-pressed",
      String(isActive)
    );

  });

  /* Update the mobile menu label */

  updateMenuAccessibility();

  /* Save preference */

  saveLanguage(selectedLanguage);

}


function initializeLanguageSwitcher() {

  document.querySelectorAll(
    ".language-btn"
  ).forEach(button => {

    button.addEventListener(
      "click",
      () => {

        applyLanguage(
          button.dataset.lang
        );

      }
    );

  });

  applyLanguage(
    getSavedLanguage()
  );

}


/* ==========================================================
   MOBILE NAVIGATION
========================================================== */

function updateMenuAccessibility() {

  const toggle = document.querySelector(
    ".mobile-menu-toggle"
  );

  const navigation = document.querySelector(
    ".primary-navigation"
  );

  if (!toggle || !navigation) {
    return;
  }

  const isOpen =
    navigation.classList.contains("is-open");

  toggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  toggle.setAttribute(
    "aria-label",
    isOpen
      ? translations[currentLanguage].closeMenu
      : translations[currentLanguage].openMenu
  );

}


function initializeMobileNavigation() {

  const toggle = document.querySelector(
    ".mobile-menu-toggle"
  );

  const navigation = document.querySelector(
    ".primary-navigation"
  );

  if (!toggle || !navigation) {
    return;
  }

  toggle.addEventListener(
    "click",
    () => {

      navigation.classList.toggle(
        "is-open"
      );

      updateMenuAccessibility();

    }
  );

  /* Close menu after selecting a page */

  navigation.querySelectorAll(
    "a"
  ).forEach(link => {

    link.addEventListener(
      "click",
      () => {

        navigation.classList.remove(
          "is-open"
        );

        updateMenuAccessibility();

      }
    );

  });

  /* Close menu with Escape */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        navigation.classList.remove(
          "is-open"
        );

        updateMenuAccessibility();

      }

    }
  );

  /* Reset menu when switching to desktop */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 900) {

        navigation.classList.remove(
          "is-open"
        );

        updateMenuAccessibility();

      }

    }
  );

  updateMenuAccessibility();

}


/* ==========================================================
   INTERACTIVE FLIPPING SERVICE CARDS
========================================================== */

function initializeServiceCards() {

  const cards = document.querySelectorAll(
    ".service-card"
  );

  cards.forEach(card => {

    /* Make the whole card keyboard accessible */

    card.setAttribute(
      "tabindex",
      "0"
    );

    card.setAttribute(
      "role",
      "button"
    );

    card.setAttribute(
      "aria-expanded",
      "false"
    );

    function flipCard() {

      const isFlipped =
        card.classList.toggle("is-flipped");

      card.setAttribute(
        "aria-expanded",
        String(isFlipped)
      );

    }

    /* Click or tap anywhere on the card */

    card.addEventListener(
      "click",
      event => {

        /* Preserve quotation links */

        if (event.target.closest("a")) {
          return;
        }

        flipCard();

      }
    );

    /* Enter or Space flips the card */

    card.addEventListener(
      "keydown",
      event => {

        if (
          event.target !== card ||
          (
            event.key !== "Enter" &&
            event.key !== " "
          )
        ) {
          return;
        }

        event.preventDefault();

        flipCard();

      }
    );

  });

}


/* ==========================================================
   AUTOMATIC COPYRIGHT YEAR
========================================================== */

function initializeCopyrightYear() {

  const yearElement = document.getElementById(
    "current-year"
  );

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

}


/* ==========================================================
   INITIALIZATION
========================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initializeLanguageSwitcher();

    initializeMobileNavigation();

    initializeServiceCards();

    initializeCopyrightYear();

  }
);
