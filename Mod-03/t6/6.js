"use strict"

// Etsitään html-sivulta nappula, jonka painallusta aletaan kuunnella
const nappula = document.querySelector("button");

// Määritellään mitä tehdään kun nappulaa painetaan
function nappulanPainallus(evt) {
    alert ("Button Clicked");
}

// Määritellään nappulalle tapahtumankuuntelija
 nappula.addEventListener("click", nappulanPainallus)