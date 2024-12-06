// Fetch pour remplir les 'frites' à partir du 'produits.json '

let optionsF = {
    method: "GET"
}

fetch("./produits.json", optionsF)
    .then(produits => {
        console.log("produits")
        return produits.json()
    })
    .then(data => {
        // access aux données
        console.log(data.frites)
        construitMonTemplateFrites(data.frites)
    })

//fonction pour remplir les donnees des produits 'frites'

// role: remplie automatiquement diferentes données concernant le  produit 'frites' à partir du doc produits.json
// parametres: le id="cardProduits" , les données dans le doc produits.json 

function construitMonTemplateFrites(donnees) {
    // recuperer le id dans le document
    let zone = document.querySelector("#cardFrites")
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