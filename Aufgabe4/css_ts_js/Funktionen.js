/* Aufgabe: 4
Name: Jonas Meujen
Matrikel: 260231
Datum: 20.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe4;
(function (Aufgabe4) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", changeListener);
    //Change Listener
    function changeListener(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    //Variablen definieren für Verwendung
    let preisForm = 0;
    let preisVanille = 0;
    let preisSchokolade = 0;
    let preisErdbeere = 0;
    let preisApfel = 0;
    let preisVersand = 0;
    let vanilleAnzahl = 0;
    let schokoladeAnzahl = 0;
    let erdbeereAnzahl = 0;
    let apfelAnzahl = 0;
    let toppingAnzahl = 0;
    let adresse = "";
    let formOptionen = [{ name: "Becher", preis: 2 }, { name: "Waffel", preis: 2 }];
    let eissorteVanille = [{ name: "Vanille", preis: 2 }];
    let eissorteSchokolade = [{ name: "Schokolade", preis: 2 }];
    let eissorteErdbeere = [{ name: "Erdbeere", preis: 2 }];
    let eissorteApfel = [{ name: "Apfel", preis: 2 }];
    let versandoptionen = [{ name: "nichts ausgewählt", preis: 0 }, { name: "DHL", preis: 4 }, { name: "DPD", preis: 5 }, { name: "Brieftaube", preis: 10 }];
    //HTML aufbauen
    function writeHTML() {
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML;
        //Auswahl Waffel oder Becher
        childNodeHTML += "<h3>Waffel oder Becher?</h3>";
        for (let i = 0; i < formOptionen.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + formOptionen[i].name + " " + formOptionen[i].preis + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + formOptionen[i].name + " " + formOptionen[i].preis + " Euro</label>";
        }
        childNodeHTML += "<hr>";
        //Auswahl der Eissorten mit Anzahl
        childNodeHTML += "<h3>Wähle die Anzahl Kugeln aus</h3>";
        //Vanille Anzahl
        childNodeHTML += "<h4>Vanille:</h4>";
        childNodeHTML += "<select name=`Select` id=Menge1`>";
        for (let i = 0; i < 5; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Schokolade Anzahl
        childNodeHTML += "<h4>Schokolade:</h4>";
        childNodeHTML += "<select name=`Select` id=Menge2`>";
        for (let i = 0; i < 5; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Erdbeere Anzahl
        childNodeHTML += "<h4>Erdbeere:</h4>";
        childNodeHTML += "<select name=`Select` id=Menge3`>";
        for (let i = 0; i < 5; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Apfel Anzahl
        childNodeHTML += "<h4>Apfel:</h4>";
        childNodeHTML += "<select name=`Select` id=Menge4`>";
        for (let i = 0; i < 5; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        //Lieferoptionen
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (let i = 0; i < versandoptionen.length; i++) {
            childNodeHTML += "<option value='" + i + versandoptionen[i].name + " " + versandoptionen[i].preis + " Euro'>" + versandoptionen[i].name + " " + versandoptionen[i].preis + " Euro</option>";
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
            preisForm = formOptionen[priceIndex].preis;
            console.log(preisForm);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Eissorten - Vanille Preis
        if (target.id == "kugeln") {
            let node = document.getElementById("Vanilla");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisVanille = eissorteVanille[priceIndex].preis;
            console.log(preisVanille);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Menge1") {
            let node = document.getElementById("VanillaMenge");
            let value = target.value;
            let numIndex = parseInt(value.substr(1, 2));
            vanilleAnzahl = numIndex;
            console.log(vanilleAnzahl);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        /*if (target.id == "Menge1") {
            let node: HTMLElement = document.getElementById("Vanilla")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisVanille = eissorteVanille[priceIndex].preis
            console.log(preisVanille)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }*/
        //Eissorten - Schokolade Preis
        if (target.id == "Menge2") {
            let node = document.getElementById("Chocolate");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisSchokolade = eissorteSchokolade[priceIndex].preis;
            console.log(preisVanille);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Eissorten - Erdbeere Preis
        if (target.id == "Menge3") {
            let node = document.getElementById("Strawberry");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisErdbeere = eissorteErdbeere[priceIndex].preis;
            console.log(preisVanille);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        //Eissorten - Apfel Preis
        if (target.id == "Menge4") {
            let node = document.getElementById("Apple");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisApfel = eissorteApfel[priceIndex].preis;
            console.log(preisVanille);
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
            preisVersand = versandoptionen[priceIndex].preis;
            console.log(versandoptionen);
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
        childNodeHTML += (preisVersand + preisForm + (preisVanille * vanilleAnzahl) + preisSchokolade + preisErdbeere + preisApfel);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    // Checken ob alles ausgefüllt ist
    function checkCheckout(_event) {
        if (adresse == "" || preisForm == 0 || preisVanille == 0 || preisSchokolade == 0 || preisErdbeere == 0 || preisApfel == 0 || preisVersand == 0 || vanilleAnzahl == 0 || schokoladeAnzahl == 0 || erdbeereAnzahl == 0 || apfelAnzahl == 0 || toppingAnzahl == 0) {
            document.getElementById("missing").innerHTML = "Es fehlen Angaben";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Funktionen.js.map