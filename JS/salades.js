// Fetch pour remplir les produits(menus, burgers, boissons...) sur la page produits

let optionsS = {
    method: "GET"
}

fetch("./produits.json", optionsS)
    .then(produits => {
        console.log("produits")
        return produits.json()
    })
    .then(data => {
        // ici j'ai access a ma donnée
        console.log(data.salades)
        construitMonTemplateSalades(data.salades)
    })




//fonction pour remplir les donnees des produits

// role: remplie automatiquement diferentes données concernant lesproduits à partir du doc produits.json
// parametres: le ID css id="cardProduits" , les données dans le doc produits.json 

function construitMonTemplateSalades(donnees) {
    // recuperer le id dans le document
    let zone = document.querySelector("#cardSalades")
    donnees.forEach(donnee => {
        zone.innerHTML += `
        <div class="cardProduits btn data-name=${donnee.nom} data-price=${donnee.prix}">

            <img src="assets${donnee.image}" alt="${donnee.nom} " ">
                <div class="">
                    <h4>${donnee.nom}</h4> 
                    <p>${donnee.prix}€</p> 
                </div>
        </div>
         `
    })
}
