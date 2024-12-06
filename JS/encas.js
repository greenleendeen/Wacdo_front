// Fetch pour remplir les Encas sur la page produits

let optionsE = {
    method: "GET"
}

fetch("./produits.json", optionsE)
    .then(produits => {
        console.log("produits")
        return produits.json()
    })
    .then(data => {
        // ici j'ai access aux donnees
        console.log(data.encas)
        construitMonTemplateEncas(data.encas)
    })


//fonction pour remplir les donnees des produits

// role: remplie automatiquement diferentes données concernant les produits à partir du doc produits.json
// parametres: le ID css id="cardProduits" , les données dans le doc produits.json 

function construitMonTemplateEncas(donnees) {
    // recuperer le id dans le document
    let zone = document.querySelector("#cardEncas")
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