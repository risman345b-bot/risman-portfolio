// ======================
// THEME TOGGLE
// ======================
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// ======================
// NAVBAR ACTIVE ON SCROLL
// ======================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
