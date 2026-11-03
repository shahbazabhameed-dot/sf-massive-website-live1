"use strict";

const isArabic = (document.documentElement.lang || "").toLowerCase().startsWith("ar");
const openLabel = isArabic ? "فتح القائمة" : "Open navigation menu";
const closeLabel = isArabic ? "إغلاق القائمة" : "Close navigation menu";

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? openLabel : closeLabel);
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", openLabel);
    });
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
