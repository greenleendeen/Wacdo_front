// ouverture et fermeture du panier: pour ouvrir on click sur le panier, pour fermer on click sur la croix
const cart = document.querySelector("#cart");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;

cart.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("popup--open");
    body.classList.add("lock");
  });
  
  popupClose.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("popup--open");
    body.classList.remove("lock");
  });