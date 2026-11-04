const config = window.HVAC_SITE_CONFIG || {};

document.querySelectorAll("[data-business-name]").forEach((element) => {
  element.textContent = config.businessName || "Everwell Heating & Air";
});

document.querySelectorAll("[data-business-short]").forEach((element) => {
  element.textContent = config.businessShort || "Everwell";
});

document.querySelectorAll("[data-phone-display]").forEach((element) => {
  element.textContent = config.phoneDisplay || "(512) 555-0148";
});

document.querySelectorAll("[data-phone-link]").forEach((element) => {
  element.href = `tel:${config.phoneHref || "+15125550148"}`;
});

document.querySelectorAll("[data-service-area]").forEach((element) => {
  element.textContent = config.serviceArea || "Austin and nearby communities";
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  });
});

const board = document.querySelector(".dispatch-board");
const routeObserver = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    board.classList.add("route-active");
    observer.disconnect();
  }
}, { threshold: 0.28 });

routeObserver.observe(board);

const form = document.getElementById("service-form");
const formMessage = document.getElementById("form-message");
const submitButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.className = "form-message";

  const requiredFields = [...form.querySelectorAll("[required]")];
  let firstInvalid = null;

  requiredFields.forEach((field) => {
    const invalid = !field.value.trim();
    field.setAttribute("aria-invalid", String(invalid));
    if (invalid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    formMessage.textContent = "Please complete the highlighted fields so the team can follow up.";
    firstInvalid.focus();
    return;
  }

  submitButton.disabled = true;
  submitButton.querySelector("span").textContent = "Preparing request…";
  formMessage.textContent = "";

  window.setTimeout(() => {
    submitButton.disabled = false;
    submitButton.querySelector("span").textContent = "Request service";
    formMessage.className = "form-message success";
    formMessage.textContent = "Demo complete. Connect this form to the client’s CRM before launch.";
    form.reset();
    requiredFields.forEach((field) => field.removeAttribute("aria-invalid"));
  }, 700);
});
