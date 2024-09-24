// Fetch pour remplir les  desserts sur la page produits

let optionsD = {
    method: "GET"
}

fetch("./produits.json", optionsD)
    .then(produits => {
        console.log("produits")
        return produits.json()
    })
    .then(data => {
        // ici j'ai access aux donnees
        console.log(data.desserts)
        construitMonTemplateDesserts(data.desserts)
    })


//fonction pour remplir les donnees des produits

// role: remplie automatiquement diferentes données concernant lesproduits à partir du doc produits.json
// parametres: le ID css id="cardProduits" , les données dans le doc produits.json 

function construitMonTemplateDesserts(donnees) {
    // recuperer le id dans le document
    let zone = document.querySelector("#cardDesserts")
    donnees.forEach(donnee => {
        zone.innerHTML += `
        <div class="cardProduits btn">
            <img src="assets${donnee.image}" alt="${donnee.nom} " ">
                <div class="">
                    <h4>${donnee.nom}</h4> 
                    <p>${donnee.prix}€</p> 
                </div>
        </div>
         `
    })
}