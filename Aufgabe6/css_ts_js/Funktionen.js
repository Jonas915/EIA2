/* Aufgabe: 6
Name: Jonas Meujen
Matrikel: 260231
Datum: 28.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe5;
(function (Aufgabe5) {
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        writeHTML(Aufgabe5.aussenArray); //übergebe das große/äußere Array
        changeListener(_event);
    }
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
    function writeHTML(_AussenArr) {
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML = "";
        for (let key in _AussenArr) {
            let innenArray = _AussenArr[key];
            switch (key) {
                case "formOptionen": { //wenn das der Fall ist bau mir bitte folgendes in mein HTML als Dropdown
                    childNodeHTML += "<h3>Waffel oder Becher?</h3>";
                    for (let i = 0; i < innenArray.length; i++) {
                        childNodeHTML += "<input type='radio' name='Form' value='" + innenArray[i].name + " " + innenArray[i].preis + " Euro'  id='radio" + i + "' />";
                        childNodeHTML += "<label for='check" + "'>" + innenArray[i].name;
                    }
                    childNodeHTML += "<hr>";
                    break; //lass die Schleife weiter laufen und beende den switch-case
                }
                case "eissorte1": { //bau die erste Eissorte als Dropdown
                    childNodeHTML += "<h4>Kugel 1:</h4>";
                    childNodeHTML += "<select name='Sorte1' id='Sorte1'>";
                    childNodeHTML += "<option value=''</option>";
                    for (let i = 0; i < innenArray.length; i++) {
                        childNodeHTML += "<option number=" + i + " value='" + innenArray[i].name + " " + innenArray[i].preis + " Euro'>" + innenArray[i].name + " " + innenArray[i].preis + " Euro</option>";
                    }
                    childNodeHTML += "</select>";
                    childNodeHTML += "<hr>";
                    break; //lass die Schleife weiter laufen und beende den switch-case
                }
                case "eissorte2": { //bau die nächste Eissorte als Dropdown
                    childNodeHTML += "<h4>Kugel 2:</h4>";
                    childNodeHTML += "<select name='Sorte2' id='Sorte2'>";
                    childNodeHTML += "<option value=''</option>";
                    for (let i = 0; i < innenArray.length; i++) {
                        childNodeHTML += "<option number=" + i + "value='" + innenArray[i].name + " " + innenArray[i].preis + " Euro'>" + innenArray[i].name + " " + innenArray[i].preis + " Euro</option>";
                    }
                    childNodeHTML += "</select>";
                    childNodeHTML += "<hr>";
                    break; //lass die Schleife weiter laufen und beende den switch-case
                }
                case "eissorte3": { //bau die nächste Eissorte als Dropdown
                    childNodeHTML += "<h4>Kugel 3:</h4>";
                    childNodeHTML += "<select name='Sorte3' id='Sorte3'>";
                    childNodeHTML += "<option value=''</option>";
                    for (let i = 0; i < innenArray.length; i++) {
                        childNodeHTML += "<option number=" + i + "value='" + innenArray[i].name + " " + innenArray[i].preis + " Euro'>" + innenArray[i].name + " " + innenArray[i].preis + " Euro</option>";
                    }
                    childNodeHTML += "</select>";
                    childNodeHTML += "<hr>";
                    break; //lass die Schleife weiter laufen und beende den switch-case
                }
                case "eissorte4": { //bau die letzte Eissorte als Dropdown
                    childNodeHTML += "<h4>Kugel 4:</h4>";
                    childNodeHTML += "<select name='Sorte4' id='Sorte4'>";
                    childNodeHTML += "<option value=''</option>";
                    for (let i = 0; i < innenArray.length; i++) {
                        childNodeHTML += "<option number=" + i + "value='" + innenArray[i].name + " " + innenArray[i].preis + " Euro'>" + innenArray[i].name + " " + innenArray[i].preis + " Euro</option>";
                    }
                    childNodeHTML += "</select>";
                    childNodeHTML += "<hr>";
                    break; //lass die Schleife weiter laufen und beende den switch-case
                }
                case "versandoptionen": { //bau die Lieferoptionen als Dropdown
                    childNodeHTML += "<h3>Lieferoptionen</h3>";
                    childNodeHTML += "<select name='Versandart' id='ship'>";
                    for (let i = 0; i < innenArray.length; i++) {
                        childNodeHTML += "<option value='" + innenArray[i].name + " " + innenArray[i].preis + " Euro'>" + innenArray[i].name + " " + innenArray[i].preis + " Euro</option>";
                    }
                    childNodeHTML += "</select>";
                    childNodeHTML += "<br>";
                    //bau wenn du hier bist auch noch das Adressfeld
                    childNodeHTML += "<h3>Adresse</h3>";
                    childNodeHTML += "<input id='ad' type='text' name='Adresse' placeholder='Adresse hier eingeben' required/>";
                    node.innerHTML += childNodeHTML;
                    break; //lass die Schleife weiter laufen und beende den switch-case
                }
            }
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        //Becher oder Waffel - Preis
        if (target.name == "Form") {
            let node = document.getElementById("Form");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            //preisForm = aussenArray["formOptionen"][priceIndex].preis;//nimm das äußere Array und davon die formOptionen und davon wiederum den gespeicheten Preis
            console.log(preisForm);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(0);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Sorte1
        if (target.id == "Sorte1") {
            let node = document.getElementById("Vanilla");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            //preisSorte1 = aussenArray["eissorte1"][priceIndex].preis;
            console.log(preisSorte1);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(0);
            console.log(value.substr(1));
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Sorte 2
        if (target.id == "Sorte2") {
            let node = document.getElementById("Chocolate");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            //preisSorte2 = aussenArray["eissorte2"][priceIndex].preis;
            console.log(preisSorte2);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(0);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Sorte 3
        if (target.id == "Sorte3") {
            let node = document.getElementById("Strawberry");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            //preisSorte3 = aussenArray["eissorte3"][priceIndex].preis;
            console.log(preisSorte3);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(0);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Sorte 4
        if (target.id == "Sorte4") {
            let node = document.getElementById("Apple");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            //preisSorte4 = aussenArray["eissorte4"][priceIndex].preis;
            console.log(preisSorte4);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(0);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Lieferoption
        if (target.id == "ship") {
            let node = document.getElementById("Shipping");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            //preisVersand = aussenArray["versandoptionen"][priceIndex].preis;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(0);
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
        childNodeHTML += (preisForm + preisVersand + preisSorte1 + preisSorte2 + preisSorte3 + preisSorte4);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    // Checken ob alles ausgefüllt ist
    function checkCheckout(_event) {
        if (adresse == "") {
            document.getElementById("missing1").innerHTML = "Adresse angeben";
        }
        if (preisForm == 0) {
            document.getElementById("missing2").innerHTML = "Form wählen";
        }
        if (preisVersand == 0) {
            document.getElementById("missing3").innerHTML = "Versandoption wählen";
        }
        if (preisSorte1 == 0) {
            document.getElementById("missing4").innerHTML = "Sorte 1 wählen";
        }
        else {
            document.getElementById("missing5").innerHTML = "";
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Funktionen.js.map