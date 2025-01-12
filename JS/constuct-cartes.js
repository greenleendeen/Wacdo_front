// Fonction pour construire les cartes de produits dynamiquement
function construitMonTemplateProduits(categorie, donnees) {
    const zone = document.querySelector(`#card${categorie}`);
    if (!zone) {
        console.error(`Zone pour la catégorie ${categorie} non trouvée`);
        return;
    }

    donnees.forEach(donnee => {
        if (!donnee.nom || !donnee.prix || isNaN(donnee.prix)) {
            console.error(`Données invalides pour la catégorie ${categorie} :`, donnee);
            return;
        }

        zone.innerHTML += `
        <div class="cardProduits btn" data-nom="${donnee.nom}" data-price="${donnee.prix}">
            <img src="assets${donnee.image}" alt="${donnee.nom}">
            <div>
                <h4>${donnee.nom}</h4>
                <p>${donnee.prix.toFixed(2)}€</p>
            </div>
        </div>`;
    });
}