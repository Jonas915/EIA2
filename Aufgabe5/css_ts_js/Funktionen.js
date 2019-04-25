/* Aufgabe: 5
Name: Jonas Meujen
Matrikel: 260231
Datum: 28.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe5;
(function (Aufgabe5) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", changeListener);
    //Change Listener
    function changeListener(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    //Variablen definieren für Verwendung
    let preisForm = 0;
    let preisSorte1 = 0;
    let preisSorte2 = 0;
    let preisSorte3 = 0;
    let preisSorte4 = 0;
    let preisVersand = 0;
    let adresse = "";
    //HTML aufbauen
    function writeHTML() {
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML;
        //Auswahl Waffel oder Becher
        childNodeHTML += "<h3>Waffel oder Becher?</h3>";
        for (let i = 0; i < Aufgabe5.formOptionen.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + Aufgabe5.formOptionen[i].name + " " + Aufgabe5.formOptionen[i].preis + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe5.formOptionen[i].name;
        }
        childNodeHTML += "<hr>";
        //Auswahl der Eissorten 
        //Sorte 1
        childNodeHTML += "<h4>Sorte 1:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte1'>";
        for (let i = 0; i < Aufgabe5.eissorte1.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte1[i].name + " " + Aufgabe5.eissorte1[i].preis + " Euro'>" + Aufgabe5.eissorte1[i].name + " " + Aufgabe5.eissorte1[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Sorte 2
        childNodeHTML += "<h4>Sorte 2:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte2'>";
        for (let i = 0; i < Aufgabe5.eissorte2.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte2[i].name + " " + Aufgabe5.eissorte2[i].preis + " Euro'>" + Aufgabe5.eissorte2[i].name + " " + Aufgabe5.eissorte2[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Sorte 3
        childNodeHTML += "<h4>Sorte 3:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte3'>";
        for (let i = 0; i < Aufgabe5.eissorte3.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte3[i].name + " " + Aufgabe5.eissorte3[i].preis + " Euro'>" + Aufgabe5.eissorte3[i].name + " " + Aufgabe5.eissorte3[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Sorte 4
        childNodeHTML += "<h4>Sorte 4:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte4'>";
        for (let i = 0; i < Aufgabe5.eissorte4.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte4[i].name + " " + Aufgabe5.eissorte4[i].preis + " Euro'>" + Aufgabe5.eissorte4[i].name + " " + Aufgabe5.eissorte4[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lieferoptionen
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (let i = 0; i < Aufgabe5.versandoptionen.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.versandoptionen[i].name + " " + Aufgabe5.versandoptionen[i].preis + " Euro'>" + Aufgabe5.versandoptionen[i].name + " " + Aufgabe5.versandoptionen[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        //Adresse
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='Adresse hier eingeben' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        //Becher oder Waffel - Preis
        if (target.name == "Radiogroup") {
            let node = document.getElementById("Form");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisForm = Aufgabe5.formOptionen[priceIndex].preis;
            console.log(preisForm);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Sorte1
        if (target.id == "Sorte1") {
            let node = document.getElementById("Vanilla");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisSorte1 = Aufgabe5.eissorte1[priceIndex].preis;
            console.log(preisSorte1);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Sorte 2
        if (target.id == "Sorte2") {
            let node = document.getElementById("Chocolate");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisSorte2 = Aufgabe5.eissorte2[priceIndex].preis;
            console.log(preisSorte2);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Sorte 3
        if (target.id == "Sorte3") {
            let node = document.getElementById("Strawberry");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisSorte3 = Aufgabe5.eissorte3[priceIndex].preis;
            console.log(preisSorte3);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Sorte 4
        if (target.id == "Sorte4") {
            let node = document.getElementById("Apple");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisSorte4 = Aufgabe5.eissorte4[priceIndex].preis;
            console.log(preisSorte4);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lieferoption
        if (target.id == "ship") {
            let node = document.getElementById("Shipping");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisVersand = Aufgabe5.versandoptionen[priceIndex].preis;
            console.log(Aufgabe5.versandoptionen);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Adresse
        if (target.id == "ad") {
            let node = document.getElementById("Home");
            adresse = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let node = document.getElementById("Total");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (preisVersand + preisForm + preisSorte1 + preisSorte2 + preisSorte3 + preisSorte4);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    // Checken ob alles ausgefüllt ist
    function checkCheckout(_event) {
        if (adresse == "" || preisForm == 0 || preisSorte1 == 0 || preisSorte2 == 0 || preisSorte3 == 0 || preisSorte4 == 0 || preisVersand == 0) {
            document.getElementById("missing").innerHTML = "Es fehlen Angaben";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Funktionen.js.map