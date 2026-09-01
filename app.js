/* Si BCS, shared interactions */
(function () {
  "use strict";

  /* ---- Theme toggle (persist per-viewer) ---- */
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("sibcs-theme");
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  } catch (e) {}
  function toggleTheme() {
    var cur = root.getAttribute("data-theme");
    var isDark;
    if (cur) { isDark = cur === "dark"; }
    else { isDark = window.matchMedia("(prefers-color-scheme: dark)").matches; }
    var next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("sibcs-theme", next); } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-theme-toggle]");
    if (t) { toggleTheme(); }
    var m = e.target.closest("[data-menu-toggle]");
    if (m) {
      var menu = document.getElementById("mobileMenu");
      if (menu) menu.classList.toggle("open");
    }
    var ml = e.target.closest(".mobile-menu a");
    if (ml) { var mm = document.getElementById("mobileMenu"); if (mm) mm.classList.remove("open"); }
  });

  /* ---- Sticky header shadow ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revs = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    revs.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revs.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero connective-node canvas ---- */
  var canvas = document.querySelector("canvas.nodes");
  if (canvas && !reduce) {
    var ctx = canvas.getContext("2d");
    var w, h, dpr, nodes = [], raf;
    function css(varName) { return getComputedStyle(root).getPropertyValue(varName).trim() || "#3FD8C4"; }
    var lineColor, dotColor;
    function palette() { lineColor = css("--on-ink-accent") || "#3FD8C4"; dotColor = css("--on-ink-gold") || "#E7B45B"; }
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.max(26, Math.min(64, Math.floor((w * h) / 26000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * 0.22, vy: (Math.random() - .5) * 0.22, r: Math.random() * 1.6 + 0.6, gold: Math.random() < 0.18 });
      }
    }
    function hexA(hex, a) {
      hex = hex.replace('#',''); if (hex.length === 3) hex = hex.split('').map(function(c){return c+c;}).join('');
      var n = parseInt(hex, 16); return "rgba(" + ((n>>16)&255) + "," + ((n>>8)&255) + "," + (n&255) + "," + a + ")";
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      var maxD = Math.min(170, w / 5);
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) {
            ctx.strokeStyle = hexA(lineColor, (1 - d / maxD) * 0.22);
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (var k = 0; k < nodes.length; k++) {
        var nd = nodes[k];
        ctx.fillStyle = nd.gold ? hexA(dotColor, .85) : hexA(lineColor, .7);
        ctx.beginPath(); ctx.arc(nd.x, nd.y, nd.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    palette();
    resize();
    draw();
    window.addEventListener("resize", function () { palette(); resize(); });
    // repaint palette on theme change
    new MutationObserver(function(){ palette(); }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
