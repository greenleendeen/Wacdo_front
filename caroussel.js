// JSON des boissons
  const produits = {
    "boissons": [
      {
        "id": 27,
        "nom": "Coca Cola",
        "prix": 1.90,
        "image": "/boissons/coca-cola.png"
      },
      {
        "id": 28,
        "nom": "Coca Sans Sucres",
        "prix": 1.90,
        "image": "/boissons/coca-sans-sucres.png"
      },
      {
        "id": 29,
        "nom": "Eau",
        "prix": 1.00,
        "image": "/boissons/eau.png"
      },
      {
        "id": 30,
        "nom": "Fanta Orange",
        "prix": 1.90,
        "image": "/boissons/fanta.png"
      },
      {
        "id": 31,
        "nom": "Ice Tea Pêche",
        "prix": 1.90,
        "image": "/boissons/ice-tea-peche.png"
      },
      {
        "id": 32,
        "nom": "Ice Tea Citron",
        "prix": 1.90,
        "image": "/boissons/the-vert-citron-sans-sucres.png"
      },
      {
        "id": 33,
        "nom": "Jus d'Orange",
        "prix": 2.10,
        "image": "/boissons/jus-orange.png"
      },
      {
        "id": 34,
        "nom": "Jus de Pommes Bio",
        "prix": 2.30,
        "image": "/boissons/jus-pomme-bio.png"
      }
    ]
  };

  // Sélection de la div où les boissons seront affichées
  const swiperWrapper = document.getElementById('myDIV');

  // Parcourir le JSON pour chaque boisson
  produits.boissons.forEach(boisson => {
    // Créer une div pour chaque boisson
    const boissonSlide = document.createElement('div');
    boissonSlide.classList.add('swiper-slide', 'btn', 'cardProduits');

    // HTML à injecter dans chaque slide
    boissonSlide.innerHTML = `
 
      <a href="boissons.html">
        <img src="assets${boisson.image}" alt="verre avec ${boisson.nom}" loading="lazy" />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        <div class="title">${boisson.nom}</div>
      
      </a>
    `;

    // Ajouter chaque slide au swiper wrapper
    swiperWrapper.appendChild(boissonSlide);
  });






// Fetch pour remplir les  boissons sur la page produits

/*
let optionsCarouss = {
    method: "GET"
}

fetch("./produits.json", optionsCarouss)
    .then(produits => {
        console.log("produits")
        return produits.json()
    })
    .then(data => {
        // ici j'ai access aux donnees
        console.log(data.boissons)
        construitMonCaroussel(data.boissons)
    })


//fonction pour remplir les donnees des produits

// role: remplie automatiquement diferentes données concernant lesproduits à partir du doc produits.json
// parametres: le ID css id="cardProduits" , les données dans le doc produits.json 

function construitMonCaroussel(donnees) {
    // recuperer le id dans le document
    let zone = document.querySelector("#caroussel")
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
*/



