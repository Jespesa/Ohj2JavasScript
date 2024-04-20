"use strict";

// Etsitään hakulomake
const formElem = document.querySelector("#lomake")

// Etsitään tulosten paikka
const tulosElem = document.querySelector("#tulokset");

// Määritellään syöttölomakkeelle tapahtumankäsittelijä
// data haetaan asynkronisesti netin yli
formElem.addEventListener("sumbit",async function (evt) {
    // Estetään oletustoiminto
    evt.preventDefault();
    // Luetaan käyttäjän antama hakusana lomakkeelta.
    let hakuSana = document.querySelector("input[name=q]").value;
    // muodostetaan nettiin lähettevä hakulause
    let hakuLause = "https://api.chucknorris.io/jokes/search?query=${hakuSana}";
    // tarkistetaan: tulostetaan hakulause konsoliin.
    console.log(hakuLause);


    try {
        // Haetaan data asynkronisesti netin yli, fetch-apin avulla --> saadaan Promise-tyyppinen vastaus
        let response = await fetch(hakuLause);
        // muutetaan data json-muotoon
        let jsonData = await response.json();
        //debugataan: tulostetaan json-data konsoliin
        console.log(jsonData);

        // Tämän jälkeen normaalia synkronista koodia (ei await)
        // Tyhjennetään selaimen tulosalue
        tulosElem.innerHTML = ``;

        // Käydään jokainen saatu vitsi yksitellen läpi
        // Json data sisälsi useampia olioita joten piti laittaa tarkemmin (.result)

        for (let vitsiData of jsonData.result) {
            let pElem = document.createElement("p");
            pElem.innerText = vitsiData.value;
            let articleElem = document.createElement("article");
            articleElem.append(pElem);
            // Lisätään valmis article tulosalueelle
            tulosElem.append(articleElem)
        }

    }
    catch (e) {
        console.log(e)
    }

});


