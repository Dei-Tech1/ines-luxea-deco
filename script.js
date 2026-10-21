/* =========================================================
   INÈS LUXEA DÉCO
   PREMIUM WEBSITE INTERACTIONS
   Developed by GODZYA GROUP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     MOBILE NAVIGATION
  ========================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNavigation = document.querySelector("#navigation");

  function closeMenu() {
    if (!menuToggle || !mobileNavigation) return;

    menuToggle.classList.remove("is-active");
    mobileNavigation.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  }

  if (menuToggle && mobileNavigation) {

    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNavigation.classList.toggle("is-open");

      menuToggle.classList.toggle("is-active", isOpen);

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
      );
    });

    mobileNavigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) {
        closeMenu();
      }
    });

  }


  /* ==========================================
     3D FLIP SERVICE CARDS
  ========================================== */

  const serviceCards = document.querySelectorAll(".service-card");

  function setCardState(card, flipped) {
    const frontButton = card.querySelector(".flip-trigger");
    const backButton = card.querySelector(".flip-back");
    const quoteLink = card.querySelector(".card-quote");

    card.classList.toggle("is-flipped", flipped);

    if (frontButton) {
      frontButton.setAttribute("aria-expanded", String(flipped));
      frontButton.tabIndex = flipped ? -1 : 0;
    }

    if (backButton) {
      backButton.tabIndex = flipped ? 0 : -1;
    }

    if (quoteLink) {
      quoteLink.tabIndex = flipped ? 0 : -1;
    }
  }

  serviceCards.forEach(card => {

    const frontButton = card.querySelector(".flip-trigger");
    const backButton = card.querySelector(".flip-back");
    const quoteLink = card.querySelector(".card-quote");

    setCardState(card, false);

    if (frontButton) {
      frontButton.addEventListener("click", () => {

        // Close other cards before opening this one.
        serviceCards.forEach(otherCard => {
          if (otherCard !== card) {
            setCardState(otherCard, false);
          }
        });

        setCardState(card, true);

        // Move keyboard focus to the revealed content.
        if (backButton) {
          backButton.focus({ preventScroll: true });
        }

      });
    }

    if (backButton) {
      backButton.addEventListener("click", () => {
        setCardState(card, false);

        if (frontButton) {
          frontButton.focus({ preventScroll: true });
        }
      });
    }

    if (quoteLink) {
      quoteLink.addEventListener("click", () => {
        setCardState(card, false);
      });
    }

    // Keyboard: Escape closes the flipped card.
    card.addEventListener("keydown", event => {
      if (event.key === "Escape" && card.classList.contains("is-flipped")) {
        setCardState(card, false);

        if (frontButton) {
          frontButton.focus({ preventScroll: true });
        }
      }
    });

  });


  /* ==========================================
     SMOOTH ANCHOR SCROLLING
  ========================================== */

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: reduceMotion.matches ? "auto" : "smooth",
        block: "start"
      });

      if (history.replaceState) {
        history.replaceState(null, "", targetId);
      }

      closeMenu();

    });

  });


  /* ==========================================
     AUTOMATIC COPYRIGHT YEAR
  ========================================== */

  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
