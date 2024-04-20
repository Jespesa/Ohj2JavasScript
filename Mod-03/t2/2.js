// Käytetään tiukkaa tilaa
"use strict";

// Etsitään haluttu html-elementti web-sivulta
const ulElem = document.querySelector("#target");

// Luodaan tarvittavat elementit
let li1Elem = document.createElement("li");
li1Elem.innerText = "First item";

let li2Elem =document.createElement("li")
li2Elem.innerText = "Second item";

let li3Elem =document.createElement("li")
li3Elem.innerText = "Third item";

// Kootaan palapeli eli kerrotaan mikä elementti menee toisen sisään append sanalla
ulElem.appendChild(li1Elem);
ulElem.appendChild(li2Elem);
ulElem.appendChild(li3Elem)
//määritellään listan 2. li-elementille css-luokkamääritys
//etsitään web-sivulta kaikki li-elementit
let liElementit =
    document.querySelectorAll("li");

//huomaa: liElementit on lista eli taulukko
// -> listan 2. alkio viitataan liElementit [1] koska 0, 1, 2 yms
//määritellään nyt toiselle li-elementille css-luokkamääritys # tää ottaa css käyttöön 2. alkiolle
liElementit[1].classList.add("my-item")

