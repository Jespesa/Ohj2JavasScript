"use strict"

// Tehdään datan haku asynkronisesti
async function getRandomJoke(){
    // Haetaan data fetch-apin avaulla, se palauttaa Promise-tyyppisen olion.
    // Huom ollaan asyncin sisällä --> fetch oltava await määrityksellä.
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    // Muutetaan Response-tyyppinen data json-dataksi.
    let jsonData = await response.json();

    // Tämän jälkeen ei yleensä tarvita synkronoituja toimintoja (Koska nettihaku on tehty)

    // Tulostetaan vitsi konsoliin, saadaan json-datan avaimella "value".
    console.log(jsonData.value)
}

// Nyt "tapahtumankäsittelijänä" on pelkkä funktion kutsu
getRandomJoke();