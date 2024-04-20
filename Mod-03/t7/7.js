"use strict"

// Etsitään web-sivulta elementti, jonka id = trigger
const tekstiElem = document.querySelector("#trigger");
// Etsitään kuva web-sivulta
const kuvaElem = document.querySelector("#target");

// Määritellään tapahtumankäsittelijä kun hiiri tulee tekstin päälle
tekstiElem.addEventListener("mouseover", hiiriPaalle);

tekstiElem.addEventListener("mouseout", hiiriPois);

// Mitä tehdään kun hiiri tulee tekstin päälle
function hiiriPaalle(evt) {
    kuvaElem.src = "img/picB.jpg"
}

//tee funktio hiiripois
function hiiriPois(evt) {
    kuvaElem.src = "img/picA.jpg";
}
