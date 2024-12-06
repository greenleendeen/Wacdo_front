document.addEventListener('DOMContentLoaded', function () {
    // Récupérer toutes les cartes produits
    const productCards = document.querySelectorAll('.cardProduits');
    const commandeListe = document.getElementById('commandeListe');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    // Ajouter un événement de clic à chaque carte produit
    productCards.forEach(card => {
        card.addEventListener('click', function () {
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            // Ajouter le produit à la commande
            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - ${productPrice.toFixed(2)}€`;
            commandeListe.appendChild(listItem);

            // Mettre à jour le total
            totalPrice += productPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});
  

