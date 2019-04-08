/**
Name: Jonas Meujen
Matrikel: 260231
Datum: 06.04.2019
Bei diesem Code hatte ich zum Teil Hilfe von Markus Damm.
**/
//Vorbereitung: Arrays und Interface für Kartene erstellen
var Skat;
(function (Skat) {
    document.addEventListener("DOMContentLoaded", Maumau);
    let allCards = [{ color: "Kreuz", value: "7" }, { color: "Kreuz", value: "8" }, { color: "Kreuz", value: "9" }, { color: "Kreuz", value: "10" }, { color: "Kreuz", value: "Bube" }, { color: "Kreuz", value: "Dame" }, { color: "Kreuz", value: "Koenig" }, { color: "Kreuz", value: "Ass" },
        { color: "Herz", value: "7" }, { color: "Herz", value: "8" }, { color: "Herz", value: "9" }, { color: "Herz", value: "10" }, { color: "Herz", value: "Bube" }, { color: "Herz", value: "Dame" }, { color: "Herz", value: "Koenig" }, { color: "Herz", value: "Ass" },
        { color: "Pik", value: "7" }, { color: "Pik", value: "8" }, { color: "Pik", value: "9" }, { color: "Pik", value: "10" }, { color: "Pik", value: "Bube" }, { color: "Pik", value: "Dame" }, { color: "Pik", value: "Koenig" }, { color: "Pik", value: "Ass" },
        { color: "Karo", value: "7" }, { color: "Karo", value: "8" }, { color: "Karo", value: "9" }, { color: "Karo", value: "10" }, { color: "Karo", value: "Bube" }, { color: "Karo", value: "Dame" }, { color: "Karo", value: "Koenig" }, { color: "Karo", value: "Ass" },];
    let handCards = [];
    let pileCards = [];
    //Hauptfunktionen
    function Maumau() {
        document.getElementById("Inhalt").addEventListener("click", removeCard);
        //Promptfenster
        let numberCards;
        let input = prompt("Hi, Melvin! Mit wie vielen Handkarten willst du spielen?");
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
    //Anzahl Handkarten generieren
    function createRandomNumber(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    //discard
    function removeCard(_event) {
        let main = document.getElementById("Inhalt");
        let domCard = _event.target;
        if (domCard != main) {
            let index;
            let domAttribute = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(4);
            index = parseInt(domAttribute);
            let karte = handCards.splice(index, 1)[0];
            pileCards.push(karte);
            for (let i = 0; i < handCards.length; i++) {
                placeDiv(handCards[i].color, handCards[i].value, i);
            }
        }
    }
    //Divs erstellen
    function placeDiv(_color, _value, _y) {
        let div = document.createElement("div");
        document.getElementById("Inhalt").appendChild(div);
        div.setAttribute("class", _color);
        div.setAttribute("id", "card" + _y);
        document.getElementById("card" + _y).innerHTML += _color + _value;
    }
})(Skat || (Skat = {}));
//# sourceMappingURL=Aufgabe2.js.map