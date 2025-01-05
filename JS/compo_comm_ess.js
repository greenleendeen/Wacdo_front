document.addEventListener('DOMContentLoaded', function () {
    let total = 0;
    
    // Récupérer tous les boutons de produit
    const buttons = document.querySelectorAll('.cardProduits');
    
    // Ajouter un événement de clic à chaque bouton
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Récupérer le prix du produit à partir de l'attribut data-price
            const price = parseFloat(this.getAttribute('data-price'));
            
            // Ajouter le prix au total
            total += price;
            
            // Mettre à jour l'affichage du total
            document.getElementById('total').innerText = `Total : ${total}€`;
        });
    });
});

/** 
document.addEventListener('DOMContentLoaded', function () { 
    // Récupérer toutes les cartes produits
    const productCards = document.querySelectorAll('.cardProduits');
    const commandeListe = document.getElementById('commandeListe');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    // Ajouter un événement de clic à chaque carte produit
    productCards.forEach(card => {
        card.addEventListener('click', function () {
            // Récupérer les attributs 'data-name' et 'data-price'
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            // Vérifier que le prix est valide
            if (!isNaN(productPrice) && productName) {
                // Ajouter le produit à la commande
                const listItem = document.createElement('li');
                listItem.textContent = `${productName} - ${productPrice.toFixed(2)}€`;
                commandeListe.appendChild(listItem);

                // Mettre à jour le total
                totalPrice += productPrice;
                totalPriceElement.textContent = totalPrice.toFixed(2);
            } else {
          //      console.error("Données invalides : vérifiez 'data-name' et 'data-price' dans les cartes produit.");
          console.log(`Product Name: ${productName}, Product Price: ${productPrice}`);
            }
        });
    });
});*/
