import {ajout} from './participants/ajout.js'
import {affiche} from './participants/affichage.js'
import {filtrage} from './participants/filtrage.js'
import {recherche} from './participants/recherche.js'
let participant = []
const form = document.querySelector("#form-participant");
let btn = document.getElementById('submit')
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log("hhhhhhhhhhh");
    ajout(participant);
    affiche(participant);
    console.log(filtrage(participant, 'Web'))
console.log(recherche(participant,'ait'))
})






// querySelector=== nodelist




// array [0][9]
// getelement ==== htmlcollection
// stopPropagation()


