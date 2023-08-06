document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".section");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        sections.forEach((s) => s.classList.remove("active"));
        tab.classList.add("active");
        sections[index].classList.add("active");
      });
    });
  });
  