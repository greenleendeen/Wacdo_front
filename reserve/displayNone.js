
document.addEventListener("DOMContentLoaded", () => {
    // Récupérer tous les boutons et sections
    const buttons = document.querySelectorAll(".category-btn");
    const sections = document.querySelectorAll(".category-content");
    
    // Pour chaque bouton, on lui associe un gestionnaire d'événement
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // Cacher toutes les sections
        sections.forEach(section => section.classList.add("hidden"));
  
        // Récupérer la section ciblée via data-target
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
  
        // Afficher la section ciblée
        if (targetSection) {
          targetSection.classList.remove("hidden");
        }
      });
    });
  });
  