/* Divina Gio — portfolio interactions */

(function () {
  "use strict";

  /* ---- Tools marquee ---- */
  var TOOLS = [
    "Google Workspace",
    "Microsoft Office",
    "Go High Level",
    "Trello",
    "Calendly",
    "Slack",
    "Zoom",
    "Canva",
    "ChatGPT",
    "Claude AI",
    "LinkedIn",
    "Google Sheets"
  ];

  document.querySelectorAll("[data-row]").forEach(function (row) {
    TOOLS.forEach(function (name) {
      var li = document.createElement("li");
      var dot = document.createElement("b");
      li.appendChild(dot);
      li.appendChild(document.createTextNode(name));
      row.appendChild(li);
    });
  });

  /* ---- Sticky nav border ---- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    nav.classList.toggle("is-stuck", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");

  var setMenu = function (open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
    menu.dataset.open = String(open);
  };

  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setMenu(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760 && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
    }
  });

  /* ---- Scroll reveal ---- */
  var items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    items.forEach(function (el) { io.observe(el); });
  }

  /* Calendly's own widget.js sizes the inline embed. Do not set its height
     from here — a second writer races that logic and collapses the panel. */

  /* ---- Footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
