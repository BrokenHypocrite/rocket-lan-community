/**
 * Buy Me a Coffee floating action button.
 *
 * Injects a small circular link, fixed to the bottom-right of the
 * viewport, on every page that loads this script. Pure vanilla JS, no
 * dependencies, no network requests: the icon is an inline SVG so there's
 * nothing to fetch and nothing that can fail to load.
 *
 * Safe to include on every page unconditionally; guards against double
 * injection so it's harmless if the script tag ever ends up on a page
 * twice.
 */
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".coffee-fab")) return;

  var link = document.createElement("a");
  link.className = "coffee-fab";
  link.href = "https://buymeacoffee.com/brokenhypocrite";
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Buy me a coffee");
  link.title = "Buy me a coffee";
  link.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M4 9h13a1 1 0 0 1 1 1v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3a1 1 0 0 1 1-1Z" stroke="#1a1a1a" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<path d="M17.5 10.5H19a2.5 2.5 0 0 1 0 5h-1.5" stroke="#1a1a1a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M8.5 2.5c-.6.9-.6 1.6 0 2.4.6.8.6 1.5 0 2.4M12 2.5c-.6.9-.6 1.6 0 2.4.6.8.6 1.5 0 2.4" stroke="#1a1a1a" stroke-width="1.4" stroke-linecap="round"/>' +
    "</svg>";

  document.body.appendChild(link);
});
