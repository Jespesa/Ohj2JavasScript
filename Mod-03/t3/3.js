'use strict';
const names = ['John', 'Paul', 'Jones'];


// Etsitään web-sivulta tagi jonka id = target00
const ulElem = document.querySelector("#target");


// tehdään äsken etsityn ulElementin sisään
// uusia <li> elementtejä innerHTMl-toiminnon avulla ja for toiston avulla
for (let i= 0; i < names.length; i++) {
    //lisätään aina uutta tekstiä entisen perään -> +=
    ulElem.innerHTML += `<li>${names[i] } </li>`
}