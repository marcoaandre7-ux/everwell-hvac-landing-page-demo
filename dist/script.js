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

document.querySelectorAll("[data-hero-title]").forEach((element) => {
  element.textContent = config.heroTitle || "Heating & air conditioning service in Austin.";
});

document.querySelectorAll("[data-hero-support]").forEach((element) => {
  element.textContent = config.heroSupport || "Repair, maintenance, and installation for your home. Call our local team or request a visit.";
});

document.querySelectorAll("[data-service-cities]").forEach((list) => {
  const cities = Array.isArray(config.serviceCities) && config.serviceCities.length
    ? config.serviceCities
    : ["Austin", "Cedar Park", "Round Rock", "Pflugerville"];

  const fragment = document.createDocumentFragment();
  cities.forEach((city) => {
    const item = document.createElement("li");
    item.textContent = city;
    fragment.append(item);
  });
  list.replaceChildren(fragment);
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
    const phoneIsIncomplete = field.name === "phone" && field.value.replace(/\D/g, "").length < 7;
    const invalid = !field.checkValidity() || phoneIsIncomplete;
    field.setAttribute("aria-invalid", String(invalid));
    const error = form.querySelector(`[data-error-for="${field.name}"]`);
    if (error) {
      if (!invalid) {
        error.textContent = "";
      } else if (field.name === "phone" && field.value.trim()) {
        error.textContent = "Enter a phone number with at least 7 digits.";
      } else {
        error.textContent = `Enter your ${field.name === "service" ? "service need" : field.name}.`;
      }
    }
    if (invalid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    formMessage.textContent = "Please review the highlighted fields.";
    firstInvalid.focus();
    return;
  }

  submitButton.disabled = false;
  formMessage.className = "form-message demo-result";
  formMessage.textContent = "Demo only — your information was not sent or stored.";
});

form.addEventListener("input", (event) => {
  const field = event.target.closest("input, select");
  if (!field) return;
  field.removeAttribute("aria-invalid");
  const error = form.querySelector(`[data-error-for="${field.name}"]`);
  if (error) error.textContent = "";
  formMessage.textContent = "";
  formMessage.className = "form-message";
});
