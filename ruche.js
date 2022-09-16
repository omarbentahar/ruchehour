const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var gauche = document.getElementById('Gauche');
var droite = document.getElementById('Droite');

function blockimages(alternate) {
    if (alternate) {
        return `<div> <input type="image" src="icones/ruche.png"/></div><div><input type="image" src="icones/abeille.png"/></div>`
    }
    else {
        return `<div> <input type="image" src="icones/abeille.png"/></div><div><input type="image" src="icones/ruche.png"/></div>`
    }
}

for (var i = 0; i < 10; i++) {
    gauche.innerHTML += blockimages(false);
    droite.innerHTML += blockimages(true);
}