/**
Name: Jonas Meujen
Matrikel: 260231
Datum: 06.04.2019
Bei diesem Code hatte ich zum Teil Hilfe von Julian Wörner.
**/
//Vorbereitung: Arrays und Interface für Kartene erstellen
var Skat;
(function (Skat) {
    document.addEventListener("DOMContentLoaded", Maumau);
    let allCards = [{ color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "2" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "3" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "4" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "5" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "6" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "7" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "8" }, { color: "#0000ff", typ: "9" }, { color: "#0000ff", typ: "9" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "2" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "3" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "4" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "5" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "6" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "7" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "8" }, { color: "#ff0000", typ: "9" }, { color: "#ff0000", typ: "9" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "2" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "3" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "4" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "5" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "6" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "7" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "8" }, { color: "#ffff00", typ: "9" }, { color: "#ffff00", typ: "9" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "2" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "3" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "4" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "5" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "6" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "7" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "8" }, { color: "#00ff00", typ: "9" }, { color: "#00ff00", typ: "9" },];
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
            placeDiv(allCards[randomNumber].color, allCards[randomNumber].typ, i);
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
                placeDiv(handCards[i].color, handCards[i].typ, i);
            }
        }
    }
    //Divs erstellen
    function placeDiv(_color, _typ, _y) {
        let div = document.createElement("div");
        document.getElementById("Inhalt").appendChild(div);
        div.setAttribute("id", "card" + _y);
        document.getElementById("card" + _y).innerHTML += _typ;
        let s = div.style;
        s.backgroundColor = _color;
        s.left = (_y + 0.2) * 110 + "px";
    }
})(Skat || (Skat = {}));
//# sourceMappingURL=Aufgabe2.js.map