document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const buttons = document.querySelectorAll(".nav-buttons button");
  const sections = document.querySelectorAll("section[id]");
  const header = document.getElementById("header");

  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nav.classList.remove("visible");
        } else {
          nav.classList.add("visible");
        }
      });
    },
    {
      root: null,
      threshold: 0.2
    }
  );
  if (header) headerObserver.observe(header);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const btn = document.querySelector(`.nav-buttons button[data-target="${id}"]`);
        if (entry.isIntersecting && btn) {
          buttons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        }
      });
    },
    {
      root: null,
      threshold: 0.5
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = button.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - nav.offsetHeight,
          behavior: "smooth"
        });
      }
    });
  });
});
