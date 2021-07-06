const appIcon = document.querySelector(".app-icon");
const modal = document.querySelector(".app-modal");
const modalLinks = document.querySelectorAll(".modal-links");
appIcon.addEventListener("click", e => {
  e.preventDefault();
  let aria = appIcon.getAttribute("aria-expanded");
  modal.classList.toggle("active-modal");

  modalLinks.forEach(l => {
    l.addEventListener("click", () => {
      modal.classList.remove("active-modal");
      appIcon.classList.remove("active-app-icon");
      appIcon.setAttribute("aria-expanded", "false");
    });
  });

  if (aria == "true") {
    aria = false;
  }
  if (aria == "false") {
    aria = "true";
  }
  appIcon.setAttribute("aria-expanded", aria);
});
