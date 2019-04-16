/**
Name: Jonas Meujen
Matrikel: 260231 
Datum: 13.04.2019
Bei diesem Code hatte ich zum Teil Hilfe von Markus Damm.
**/

//Vorbereitung: Arrays und Interface für Karten erstellen
namespace Skat {
    document.addEventListener("DOMContentLoaded", maumau);

    interface Card {
        color: string;
        value: string;
    }

    let allCards: Card[] = [ { color: "Kreuz", value: "7" }, { color: "Kreuz", value: "8" }, { color: "Kreuz", value: "9" }, { color: "Kreuz", value: "10" }, { color: "Kreuz", value: "Bube" }, { color: "Kreuz", value: "Dame" }, { color: "Kreuz", value: "Koenig" }, { color: "Kreuz", value: "Ass" },
    { color: "Herz", value: "7" }, { color: "Herz", value: "8" }, { color: "Herz", value: "9" }, { color: "Herz", value: "10" }, { color: "Herz", value: "Bube" }, { color: "Herz", value: "Dame" }, { color: "Herz", value: "Koenig" }, { color: "Herz", value: "Ass" },
    { color: "Pik", value: "7" }, { color: "Pik", value: "8" }, { color: "Pik", value: "9" }, { color: "Pik", value: "10" }, { color: "Pik", value: "Bube" }, { color: "Pik", value: "Dame" }, { color: "Pik", value: "Koenig" }, { color: "Pik", value: "Ass" },
    { color: "Karo", value: "7" }, { color: "Karo", value: "8" }, { color: "Karo", value: "9" }, { color: "Karo", value: "10" }, { color: "Karo", value: "Bube" }, { color: "Karo", value: "Dame" }, { color: "Karo", value: "Koenig" }, { color: "Karo", value: "Ass" },]
    let handCards: Card[] = [];
    let pileCards: Card[] = [];

    //Hauptfunktion
    function maumau() :void {
        document.getElementById("button").addEventListener("click", sortCards);
        document.getElementById("Nachzieh").addEventListener("click", addCard);
        document.addEventListener("keydown", addCardSpace);
        document.getElementById("Inhalt").addEventListener("click", removeCard);

        //Prompt
        let numberCards: number;
        let input: string = prompt("Hi, Melvin! Mit wie vielen Karten willst du spielen?");
        numberCards = Number(input);

        //Karten ausgeben
        for (let i: number = 0; i < numberCards; i++) {
            let randomNumber: number = createRandomNumber(allCards.length);
            placeDiv(allCards[randomNumber].color, allCards[randomNumber].value, i);
            let card: Card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card)
            continue;
        }
    }
    //generate random number
    function createRandomNumber(x: number) : number {
        return Math.floor(Math.random() * Math.floor(x))
    }

    
    function removeCard(_event: MouseEvent) : void {
        let main: HTMLElement = document.getElementById("Inhalt");
        let domCard: HTMLElement = <HTMLElement>_event.target;
        if (domCard != main) {
            let index: number;
            let domAttribute: string = domCard.getAttribute("id");
            if(domAttribute.substr(domAttribute.length-2).charAt(0) == "1" 
            || domAttribute.substr(domAttribute.length-2).charAt(0) == "2" 
            || domAttribute.substr(domAttribute.length-2).charAt(0) == "3") {
                domAttribute = domAttribute.substr(domAttribute.length-2);
            } else {
                domAttribute = domAttribute.substr(domAttribute.length-1);
            }
            index = parseInt(domAttribute);
            let karte: Card = handCards.splice(index, 1)[0];
            pileCards.push(karte);
            deleteCards();
            for (let i: number = 0; i < handCards.length; i++) {
                placeDiv(handCards[i].color, handCards[i].value, i);
            }
            placePile(pileCards[pileCards.length-1].color, pileCards[pileCards.length-1].value, pileCards.length-1);
            console.log(pileCards);
        }
    }

    function deletePile() : void {
        let node: HTMLElement = document.getElementById("Ablagestapel");
        node.innerHTML = " ";
    }

    function placePile(_color: string, _value: string, _y: number) : void {
        let div: HTMLDivElement = document.createElement("div");
        deletePile();
        document.getElementById("Ablagestapel").appendChild(div);
        div.setAttribute("class", _color + " " + ", pile");
        div.setAttribute("id", "card" + _color + _value + _y);
        document.getElementById("card" + _color + _value + _y).innerHTML += _color + " " +_value;
    }

    //Sortieren
    function sortCards() : void {
        handCards.sort(compareCards);
        deleteCards();
        for (let i: number = 0; i < handCards.length; i++) {
            placeDiv(handCards[i].color, handCards[i].value, i)
        }
    }

//Vergleichen von zwei Karten
    function compareCards(card1: Card, card2: Card) {
        let textA = card1.color.toUpperCase();
        let textB = card2.color.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

    //Karte adden
    function addCard() :void {
        deleteCards();
        for (let i: number = 0; i < 1; i++) {
            let randomNumber: number = createRandomNumber(allCards.length);
            let card: Card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card);
        }
        for (let i: number = 0; i < handCards.length; i++) {
            console.log(handCards);
            placeDiv(handCards[i].color, handCards[i].value, i);
        }
    }
    
//Leertaste addet Karte
    function addCardSpace(_event: KeyboardEvent): void {
        let keyCode: number = _event.keyCode;
        if (keyCode == 32) {
            addCard();
        }
    }

    //Löscht Karten
    function deleteCards() : void {
        let node: HTMLElement = document.getElementById("Inhalt");
        node.innerHTML = "";
    }

    //Divs erstellen
    function placeDiv(_color: string, _value: string, _y: number) : void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("Inhalt").appendChild(div);
        div.setAttribute("class", _color);
        //div.setAttribute("id", "card" + _y);
        div.setAttribute("id", "card" + _color + _value + _y);
        document.getElementById("card" + _color + _value + _y).innerHTML += _color + " " + _value;
    }
}