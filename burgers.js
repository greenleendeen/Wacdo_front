// Fetch pour remplir les 'burgers' sur la page produits

let optionsBurg = {
    method: "GET"
}

fetch("./produits.json", optionsBurg)
    .then(produits => {
        console.log("produits")
        return produits.json()
    })
    .then(data => {
        // ici j'ai access aux donnees
        console.log(data.burgers)
        construitMonTemplateBurgers(data.burgers)
    })


//fonction pour remplir les donnees des produits

// role: remplie automatiquement diferentes données concernant les burgers à partir du doc produits.json
// parametres: le ID css id="cardBurgers" 
//             les données dans le doc produits.json 

function construitMonTemplateBurgers(donnees) {
    // recuperer le id dans le document
    let zone = document.querySelector("#cardBurgers")
    donnees.forEach(donnee => {
        zone.innerHTML += `
        <div class="cardProduits">
            <img src="assets${donnee.image}" alt="${donnee.nom} " ">
                <div class="">
                    <h4>${donnee.nom}</h4> 
                    <p>${donnee.prix}€</p> 
                </div>
        </div>
         `
    })
}




