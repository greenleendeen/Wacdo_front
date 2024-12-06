document.addEventListener("DOMContentLoaded", () => {
    // Récupérer tous les boutons et les sections de catégories
    const buttons = document.querySelectorAll(".category-btn");
    const sections = document.querySelectorAll(".category-content");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
  
        // Cacher toutes les sections
        sections.forEach(section => section.classList.add("hidden"));
  
        // Afficher la section correspondante
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.classList.remove("hidden");
      });
    });
  });