// Fetch pour remplir les  boissons sur la page produits

let optionsB = {
    method: "GET"
}

fetch("./produits.json", optionsB)
    .then(produits => {
        console.log("produits")
        return produits.json()
    })
    .then(data => {
        // ici j'ai access aux donnees
        console.log(data.boissons)
        construitMonTemplateBoissons(data.boissons)
    })


//fonction pour remplir les donnees des produits

// role: remplie automatiquement diferentes données concernant lesproduits à partir du doc produits.json
// parametres: le ID css id="cardProduits" , les données dans le doc produits.json 

function construitMonTemplateBoissons(donnees) {
    // recuperer le id dans le document
    let zone = document.querySelector("#cardBoissons")
    donnees.forEach(donnee => {
        zone.innerHTML += `
        <div class="cardProduits btn data-nom=${donnee.nom} data-prix=${donnee.prix}">
            <img src="assets${donnee.image}" alt="${donnee.nom} " ">
                <div class="">
                    <h4>${donnee.nom}</h4> 
                    <p>${donnee.prix}€</p> 
                </div>
        </div>
         `
    })
}




