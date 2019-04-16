/**
Name: Jonas Meujen
Matrikel: 260231
Datum: 13.04.2019
Bei diesem Code hatte ich zum Teil Hilfe von Markus Damm.
**/
//Vorbereitung: Arrays und Interface für Karten erstellen
var Skat;
(function (Skat) {
    document.addEventListener("DOMContentLoaded", maumau);
    let allCards = [{ color: "Kreuz", value: "7" }, { color: "Kreuz", value: "8" }, { color: "Kreuz", value: "9" }, { color: "Kreuz", value: "10" }, { color: "Kreuz", value: "Bube" }, { color: "Kreuz", value: "Dame" }, { color: "Kreuz", value: "Koenig" }, { color: "Kreuz", value: "Ass" },
        { color: "Herz", value: "7" }, { color: "Herz", value: "8" }, { color: "Herz", value: "9" }, { color: "Herz", value: "10" }, { color: "Herz", value: "Bube" }, { color: "Herz", value: "Dame" }, { color: "Herz", value: "Koenig" }, { color: "Herz", value: "Ass" },
        { color: "Pik", value: "7" }, { color: "Pik", value: "8" }, { color: "Pik", value: "9" }, { color: "Pik", value: "10" }, { color: "Pik", value: "Bube" }, { color: "Pik", value: "Dame" }, { color: "Pik", value: "Koenig" }, { color: "Pik", value: "Ass" },
        { color: "Karo", value: "7" }, { color: "Karo", value: "8" }, { color: "Karo", value: "9" }, { color: "Karo", value: "10" }, { color: "Karo", value: "Bube" }, { color: "Karo", value: "Dame" }, { color: "Karo", value: "Koenig" }, { color: "Karo", value: "Ass" },];
    let handCards = [];
    let pileCards = [];
    //Hauptfunktion
    function maumau() {
        document.getElementById("button").addEventListener("click", sortCards);
        document.getElementById("Nachzieh").addEventListener("click", addCard);
        document.addEventListener("keydown", addCardSpace);
        document.getElementById("Inhalt").addEventListener("click", removeCard);
        //Prompt
        let numberCards;
        let input = prompt("Hi, Melvin! Mit wie vielen Karten willst du spielen?");
        numberCards = Number(input);
        //Karten ausgeben
        for (let i = 0; i < numberCards; i++) {
            let randomNumber = createRandomNumber(allCards.length);
            placeDiv(allCards[randomNumber].color, allCards[randomNumber].value, i);
            let card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card);
            continue;
        }
    }
    //generate random number
    function createRandomNumber(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    function removeCard(_event) {
        let main = document.getElementById("Inhalt");
        let domCard = _event.target;
        if (domCard != main) {
            let index;
            let domAttribute = domCard.getAttribute("id");
            if (domAttribute.substr(domAttribute.length - 2).charAt(0) == "1"
                || domAttribute.substr(domAttribute.length - 2).charAt(0) == "2"
                || domAttribute.substr(domAttribute.length - 2).charAt(0) == "3") {
                domAttribute = domAttribute.substr(domAttribute.length - 2);
            }
            else {
                domAttribute = domAttribute.substr(domAttribute.length - 1);
            }
            index = parseInt(domAttribute);
            let karte = handCards.splice(index, 1)[0];
            pileCards.push(karte);
            deleteCards();
            for (let i = 0; i < handCards.length; i++) {
                placeDiv(handCards[i].color, handCards[i].value, i);
            }
            placePile(pileCards[pileCards.length - 1].color, pileCards[pileCards.length - 1].value, pileCards.length - 1);
            console.log(pileCards);
        }
    }
    function deletePile() {
        let node = document.getElementById("Ablagestapel");
        node.innerHTML = " ";
    }
    function placePile(_color, _value, _y) {
        let div = document.createElement("div");
        deletePile();
        document.getElementById("Ablagestapel").appendChild(div);
        div.setAttribute("class", _color + " " + ", pile");
        div.setAttribute("id", "card" + _color + _value + _y);
        document.getElementById("card" + _color + _value + _y).innerHTML += _color + " " + _value;
    }
    //Sortieren
    function sortCards() {
        handCards.sort(compareCards);
        deleteCards();
        for (let i = 0; i < handCards.length; i++) {
            placeDiv(handCards[i].color, handCards[i].value, i);
        }
    }
    //Vergleichen von zwei Karten
    function compareCards(card1, card2) {
        let textA = card1.color.toUpperCase();
        let textB = card2.color.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
    //Karte adden
    function addCard() {
        deleteCards();
        for (let i = 0; i < 1; i++) {
            let randomNumber = createRandomNumber(allCards.length);
            let card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card);
        }
        for (let i = 0; i < handCards.length; i++) {
            console.log(handCards);
            placeDiv(handCards[i].color, handCards[i].value, i);
        }
    }
    //Leertaste addet Karte
    function addCardSpace(_event) {
        let keyCode = _event.keyCode;
        if (keyCode == 32) {
            addCard();
        }
    }
    //Löscht Karten
    function deleteCards() {
        let node = document.getElementById("Inhalt");
        node.innerHTML = "";
    }
    //Divs erstellen
    function placeDiv(_color, _value, _y) {
        let div = document.createElement("div");
        document.getElementById("Inhalt").appendChild(div);
        div.setAttribute("class", _color);
        //div.setAttribute("id", "card" + _y);
        div.setAttribute("id", "card" + _color + _value + _y);
        document.getElementById("card" + _color + _value + _y).innerHTML += _color + " " + _value;
    }
})(Skat || (Skat = {}));
//# sourceMappingURL=Aufgabe3.js.map