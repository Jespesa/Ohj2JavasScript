//käytetään ns. tiukkaa moodia
'use strict';

//etsitään haluttu elementti hmtl-sivulta
const ulElem = document.querySelector("#target")

//muotoillaan web-sivulle lähetettävä html koodi
let htmlKoodi=
    `
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    `;

//lisätään html-koodi edellä etsityn htm-elementin sisään
ulElem.innerHTML = htmlKoodi;

//määritellään listalle css-luokkamääritys
ulElem.classList.add("my-list");





//osaa kokeessa nää :))))))