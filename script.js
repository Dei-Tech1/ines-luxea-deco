/* =====================================================
   INÈS LUXEA DÉCO
   PREMIUM WEBSITE INTERACTIONS
   Developed by GODZYA GROUP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===================================================
     MOBILE NAVIGATION
  =================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#navigation");

  if (menuToggle && navigation) {

    function closeMenu() {

      navigation.classList.remove("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Ouvrir le menu"
      );

    }

    function openMenu() {

      navigation.classList.add("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        "true"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Fermer le menu"
      );

    }

    /* OPEN / CLOSE MENU */

    menuToggle.addEventListener("click", () => {

      const isOpen = navigation.classList.contains("is-open");

      if (isOpen) {

        closeMenu();

      } else {

        openMenu();

      }

    });


    /* CLOSE MENU AFTER SELECTING A LINK */

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

      link.addEventListener("click", () => {

        closeMenu();

      });

    });


    /* CLOSE MENU WITH ESCAPE KEY */

    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {

        closeMenu();

      }

    });


    /* CLOSE MENU WHEN SWITCHING TO DESKTOP */

    window.addEventListener("resize", () => {

      if (window.innerWidth > 800) {

        closeMenu();

      }

    });

  }


  /* ===================================================
     AUTOMATIC COPYRIGHT YEAR
  =================================================== */

  const copyrightYear = document.querySelector("#year");

  if (copyrightYear) {

    copyrightYear.textContent = new Date().getFullYear();

  }


  /* ===================================================
     SMOOTH ANCHOR NAVIGATION
  =================================================== */

  const anchorLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  anchorLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      target.scrollIntoView({

        behavior: reducedMotion ? "auto" : "smooth",

        block: "start"

      });

    });

  });

});
