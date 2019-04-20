/* Aufgabe: 4
Name: Jonas Meujen
Matrikel: 260231
Datum: 20.04.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe4 {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", changeListener);

     //Change Listener
     function changeListener(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset")
        fieldset.addEventListener("change", handleChange);
    }

    //Variablen definieren für Verwendung
    let preisForm: number = 0;
    let preisVanille: number = 0;
    let preisSchokolade: number = 0;
    let preisErdbeere: number = 0;
    let preisApfel: number = 0;
    let preisVersand: number = 0

    let vanilleAnzahl: number = 0;
    let schokoladeAnzahl: number = 0;
    let erdbeereAnzahl: number = 0;
    let apfelAnzahl: number = 0;
    let toppingAnzahl: number = 0;
    let adresse: string = "";

    //Interface mit Arrays erstellen, aus dem die Produkte genommen werden können
    interface products {
        name: string,
        preis: number,
    }

    let formOptionen: products[] = [{ name: "Becher", preis: 2}, { name: "Waffel", preis: 2}]
    let eissorteVanille: products[] = [{ name: "Vanille", preis: 2}]
    let eissorteSchokolade: products[] = [{ name: "Schokolade", preis: 2}]
    let eissorteErdbeere: products[] = [{ name: "Erdbeere", preis: 2 }]
    let eissorteApfel: products[] = [{ name: "Apfel", preis: 2 }]
    let versandoptionen: products[] = [{name:"nichts ausgewählt", preis:0}, { name: "DHL", preis: 4 }, { name: "DPD", preis: 5 }, { name: "Brieftaube", preis: 10 }]


    //HTML aufbauen
    function writeHTML(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML: string;

        //Auswahl Waffel oder Becher
        childNodeHTML += "<h3>Waffel oder Becher?</h3>";
        for (let i: number = 0; i < formOptionen.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + formOptionen[i].name + " " + formOptionen[i].preis + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + formOptionen[i].name;
        }
        childNodeHTML += "<hr>";

        //Auswahl der Eissorten mit Anzahl
        childNodeHTML += "<h3>Wähle die Anzahl Kugeln aus</h3>";

        //Vanille Anzahl
        childNodeHTML += "<h4>Vanille:</h4>";
        childNodeHTML += "<select name='Select' id='Menge1'>";
        for (let i: number = 0; i < 5; i++) {
            childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

         //Schokolade Anzahl
         childNodeHTML += "<h4>Schokolade:</h4>";
         childNodeHTML += "<select name=`Select` id=Menge2`>";
         for (let i: number = 0; i < 5; i++) {
             childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
         }
         childNodeHTML += "</select>";
         childNodeHTML += "<hr>";

         //Erdbeere Anzahl
         childNodeHTML += "<h4>Erdbeere:</h4>";
         childNodeHTML += "<select name=`Select` id=Menge3`>";
         for (let i: number = 0; i < 5; i++) {
             childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
         }
         childNodeHTML += "</select>";
         childNodeHTML += "<hr>";

         
         //Apfel Anzahl
         childNodeHTML += "<h4>Apfel:</h4>";
         childNodeHTML += "<select name=`Select` id=Menge4`>";
         for (let i: number = 0; i < 5; i++) {
             childNodeHTML += "<option value='*" + i + "'>" + i + "</option>";
         }
         childNodeHTML += "</select>";
         childNodeHTML += "<hr>";

         //Lieferoptionen
         childNodeHTML += "<h3>Lieferoptionen</h3>";
         childNodeHTML += "<select name='Select' id='ship'>";
         for (let i: number = 0; i < versandoptionen.length; i++) {
            childNodeHTML += "<option value='" + i + versandoptionen[i].name + " " + versandoptionen[i].preis + " Euro'>" + versandoptionen[i].name + " " + versandoptionen[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        //Adresse
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='Adresse hier eingeben' required/>"
        node.innerHTML += childNodeHTML;
    }

    function handleChange(_event: Event) {
        let target: HTMLInputElement = <HTMLInputElement>_event.target
        //Becher oder Waffel - Preis
        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("Form")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisForm = formOptionen[priceIndex].preis
            console.log(preisForm)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Eissorten - Vanille Preis
       if (target.id == "Menge1") {
            let node: HTMLElement = document.getElementById("Vanilla")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisVanille = eissorteVanille[priceIndex].preis * vanilleAnzahl;
            console.log(preisVanille)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Eissorten - Schokolade Preis
        if (target.id == "Menge2") {
            let node: HTMLElement = document.getElementById("Chocolate")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisSchokolade = eissorteSchokolade[priceIndex].preis
            console.log(preisVanille)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

         //Eissorten - Erdbeere Preis
         if (target.id == "Menge3") {
            let node: HTMLElement = document.getElementById("Strawberry")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisErdbeere = eissorteErdbeere[priceIndex].preis
            console.log(preisVanille)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

         //Eissorten - Apfel Preis
         if (target.id == "Menge4") {
            let node: HTMLElement = document.getElementById("Apple")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisApfel = eissorteApfel[priceIndex].preis
            console.log(preisVanille)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Lieferoption
        if (target.id == "ship") {
            let node: HTMLElement = document.getElementById("Shipping")
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisVersand = versandoptionen[priceIndex].preis
            console.log(versandoptionen)
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Adresse
        if (target.id == "ad") {
            let node: HTMLElement = document.getElementById("Home");
            adresse=target.value;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        let node: HTMLElement = document.getElementById("Total");
        let childNodeHTML: string;

        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (preisVersand + preisForm + preisVanille + preisSchokolade + preisErdbeere + preisApfel);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";

        node.innerHTML = childNodeHTML;
    }

    // Checken ob alles ausgefüllt ist
    function checkCheckout(_event: Event): void {
        if (adresse == "" || preisForm == 0 || preisVanille == 0 || preisSchokolade == 0 || preisErdbeere == 0 || preisApfel == 0 || preisVersand == 0 || vanilleAnzahl == 0 || schokoladeAnzahl == 0 || erdbeereAnzahl == 0 || apfelAnzahl == 0) {
            document.getElementById("missing").innerHTML = "Es fehlen Angaben";
        }

        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
}