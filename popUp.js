document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner les éléments
    var popup = document.getElementById('popup');
    var openPopupBtn = document.getElementById('openPopupBtn');
    var closeBtn = document.getElementsByClassName('close')[0];
    
    // Ouvrir le popup lorsque le bouton est cliqué
    openPopupBtn.onclick = function () {
        popup.style.display = 'block';
    };

    // Fermer le popup lorsque l'utilisateur clique sur (x)
    closeBtn.onclick = function () {
        popup.style.display = 'none';
    };

    // Fermer le popup lorsqu'on clique à l'extérieur de celui-ci
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
    
    // Exemple d'action lorsqu'une option est sélectionnée
    document.getElementById('option1').onclick = function () {
        alert('Vous avez choisi l\'option 1');
        popup.style.display = 'none';
    };

    document.getElementById('option2').onclick = function () {
        alert('Vous avez choisi l\'option 2');
        popup.style.display = 'none';
    };
});