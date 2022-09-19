const myHeading = document.querySelector('h1');
myHeading.textContent = 'Ruche Hour!';

var gauche = document.getElementById('imagesgauche');
var droite = document.getElementById('imagesdroite');

function blockimages(alternate) {
    if (alternate) {
        return `<div> <input type="image" src="icones/ruche.png"/></div><div><input type="image" src="icones/abeille.png"/></div>`
    }
    else {
        return `<div> <input type="image" src="icones/abeille.png"/></div><div><input type="image" src="icones/ruche.png"/></div>`
    }
}

for (var i = 0; i < 6; i++) {
    gauche.innerHTML += blockimages(false);
    droite.innerHTML += blockimages(true);
}