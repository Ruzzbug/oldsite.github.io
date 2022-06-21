let open = false;

(function () {
  "use strict";
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  //Expand projects sidebar element if in project page
  let sidebarToggle = document.getElementById("side-dropdown-toggle");
  if (sidebarToggle.ariaExpanded === "true") {
    sidebarToggle.parentNode.style.backgroundColor = "rgb(var(--accent))";
  }

  //DELETE UNFINISHED SIDEBAR ELEMENTS
  document.getElementById("about-lnk").remove();
  document.getElementById("contact-lnk").remove();
})();

//Change colour on dropdown
function sideTransition(element) {
  if (element.ariaExpanded === "false") {
    element.parentNode.style.removeProperty("background-color");
    return;
  }
  element.parentNode.style.backgroundColor = "rgb(var(--accent))";
  return;
}


//Open and close sidebar
function toggleNav() {
  if (open) {
    document.getElementById("sidebar").style.removeProperty("width");
    document.getElementById("content-container").style.filter = "none";
    document.body.style.backgroundColor = "rgb(var(--primary))";
    document.getElementById("navTog").classList.remove("opened");
    document.getElementById("navTog").classList.add("closed");
    open = false;
    return;
  }
  document.getElementById("sidebar").style.width = "var(--sidebar-width)";
  document.getElementById("content-container").style.filter = "blur(5px)";
  document.body.style.overflowX = "hidden";
  document.body.style.backgroundColor = "#888888"; //should use a div that's above to also darken images
  document.getElementById("navTog").classList.remove("closed");
  document.getElementById("navTog").classList.add("opened");
  document
    .getElementById("content-container")
    .addEventListener("click", onClickOutside);
  open = true;
}

const onClickOutside = (e) => {
  if (!e.target.className.includes("sidebar")) {
    document
      .getElementById("content-container")
      .removeEventListener("click", onClickOutside);
    toggleNav();
  }
};
