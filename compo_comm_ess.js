document.addEventListener("DOMContentLoaded", function () {
    let total = 0;
    const commandeListe = document.querySelector("#commandeListe");
    const totalPrice = document.querySelector("#totalPrice");

    // Écouter les clics sur tout le document (délégation d'événements)
    document.body.addEventListener("click", function (event) {
        const target = event.target.closest(".cardProduits");
        if (target) {
            // Récupérer les données du produit cliqué
            const nom = target.getAttribute("data-nom");
            const prixStr = target.getAttribute("data-price");
            const prix = parseFloat(prixStr);

            if (isNaN(prix)) {
                console.error(`Prix invalide pour le produit : ${nom}. Prix reçu : ${prixStr}`);
                return;
            }

            // Ajouter le produit à la commande
            const listItem = document.createElement("li");
            listItem.textContent = `${nom} - ${prix.toFixed(2)}€`;
            commandeListe.appendChild(listItem);

            // Mettre à jour le total
            total += prix;
            totalPrice.textContent = total.toFixed(2) + "€";
        }
    });
});

/**document.addEventListener("DOMContentLoaded", function () {
    let total = 0;

    const boissonsContainer = document.querySelector("#cardBoissons");
    const burgersContainer = document.querySelector("#cardBurgers");
    const commandeListe = document.querySelector("#commandeListe");
    const totalPrice = document.querySelector("#totalPrice");

    boissonsContainer.addEventListener("click", function (event) {
        const target = event.target.closest(".cardProduits");
        if (target) {
            // Récupérer les données
            const nom = target.getAttribute("data-nom");
            const prixStr = target.getAttribute("data-price");
            const prix = parseFloat(prixStr);

            // Vérification du prix
            if (isNaN(prix)) {
                console.error(`Prix invalide pour le produit : ${nom}. Prix reçu : ${prixStr}`);
                return;
            }

            // Ajouter le produit à la commande
            const listItem = document.createElement("li");
            listItem.textContent = `${nom} - ${prix.toFixed(2)}€`;
            commandeListe.appendChild(listItem);

            // Mettre à jour le total
            total += prix;
            totalPrice.textContent = total.toFixed(2) + "€";
        }
    });
});*/

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
