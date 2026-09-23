/* Divina Gio — portfolio interactions */

(function () {
  "use strict";

  /* ---- Tools marquee ----
     Logos live in images/tools/, all normalised to 80x80 on white.
     To drop a tool, delete its line. To add one, add the logo to that
     folder the same size and add a line here. */
  var TOOLS = [
    { name: "Google Workspace", file: "google-workspace.png" },
    { name: "Google Sheets", file: "google-sheets.png" },
    { name: "Microsoft Office", file: "microsoft.png" },
    { name: "Go High Level", file: "ghl.png" },
    { name: "HubSpot", file: "hubspot.png" },
    { name: "Trello", file: "trello.png" },
    { name: "Calendly", file: "calendly.png" },
    { name: "Slack", file: "slack.png" },
    { name: "Zoom", file: "zoom.png" },
    { name: "Telegram", file: "telegram.png" },
    { name: "Shortwave", file: "shortwave.png" },
    { name: "Dropbox", file: "dropbox.png" },
    { name: "Canva", file: "canva.png" },
    { name: "Photoshop", file: "photoshop.png" },
    { name: "CapCut", file: "capcut.png" },
    { name: "ChatGPT", file: "chatgpt.png" },
    { name: "Claude", file: "claude.png" },
    { name: "LinkedIn", file: "linkedin.png" },
    { name: "Meta", file: "meta.png" },
    { name: "WordPress", file: "wordpress.png" }
  ];

  document.querySelectorAll("[data-row]").forEach(function (row) {
    TOOLS.forEach(function (tool) {
      var li = document.createElement("li");
      var img = document.createElement("img");

      img.src = "images/tools/" + tool.file;
      img.width = 24;
      img.height = 24;
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = ""; /* the tool name sits right beside it */

      li.appendChild(img);
      li.appendChild(document.createTextNode(tool.name));
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
