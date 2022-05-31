(function () {
  "use strict";
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

function sideTransition(element) {
  if (element.ariaExpanded === "false") {
    element.parentNode.style.removeProperty("background-color");
    return;
  }
  element.parentNode.style.backgroundColor = "var(--accent)";
  return;
}
