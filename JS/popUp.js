
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const option1Button = document.getElementById("option1"); // Maxi
  const option2Button = document.getElementById("option2"); // Normal
  const etapeSuivanteButton = document.querySelector(".activeOrangeButton");

  const commandeListe = document.getElementById("commandeListe");
  const totalPriceElement = document.getElementById("totalPrice");



  let selectedMenu = null; // Stocke le menu sélectionné
  let selectedSize = null; // Stocke la taille choisie (Maxi ou Normal)

  // 1. Clic sur une carte de menu pour afficher le popup
  document.querySelectorAll(".menu-card").forEach(card => {
    card.addEventListener("click", function () {
      const menuName = card.querySelector("h4").textContent;
      const basePrice = parseFloat(card.querySelector("span[data-price]").getAttribute("data-price"));
      selectedMenu = { name: menuName, basePrice: basePrice };

      // Afficher le popup
      popup.style.display = "flex";
    });
  });

  // 2. Sélection de l'option dans le popup
  option1Button.addEventListener("click", function () {
    selectedSize = "Maxi";
    highlightSelection(option1Button, option2Button);
  });

  option2Button.addEventListener("click", function () {
    selectedSize = "Normal";
    highlightSelection(option2Button, option1Button);
  });

  // 3. Validation et ajout au récapitulatif de la commande
  etapeSuivanteButton.addEventListener("click", function () {
    if (selectedMenu && selectedSize) {
      const priceMultiplier = selectedSize === "Maxi" ? 1.5 : 1;
      const finalPrice = (selectedMenu.basePrice * priceMultiplier).toFixed(2);

      // Ajout au récapitulatif
      addToOrder(selectedMenu.name, selectedSize, finalPrice);

      // Réinitialisation et fermeture du popup
      selectedMenu = null;
      selectedSize = null;
      hidePopup();
    } else {
      alert("Veuillez sélectionner une taille avant de continuer.");
    }
  });

  // Fonction pour fermer le popup
  function hidePopup() {
    popup.style.display = "none";
  }

  // Fonction pour mettre en évidence le bouton sélectionné
  function highlightSelection(selectedButton, otherButton) {
    selectedButton.classList.add("selected");
    otherButton.classList.remove("selected");
  }

  // Fonction pour ajouter un élément au récapitulatif de commande
  function addToOrder(menuName, size, price) {
    const orderItem = document.createElement("li");
    orderItem.innerHTML = `${menuName} (${size}) - ${price}€`;
    commandeListe.appendChild(orderItem);
    updateTotalPrice(parseFloat(price));
  }

  // Fonction pour mettre à jour le prix total
  function updateTotalPrice(priceToAdd) {
    const currentTotal = parseFloat(totalPriceElement.textContent);
    const newTotal = (currentTotal + priceToAdd).toFixed(2);
    totalPriceElement.textContent = newTotal;
  }
});
