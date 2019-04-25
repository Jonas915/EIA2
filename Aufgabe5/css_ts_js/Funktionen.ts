/* Aufgabe: 5
Name: Jonas Meujen
Matrikel: 260231
Datum: 28.04.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe5 {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", changeListener);

     //Change Listener
     function changeListener(_event: Event) {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }

    //Variablen definieren für Verwendung
    let preisForm: number = 0;
    let preisSorte1: number = 0;
    let preisSorte2: number = 0;
    let preisSorte3: number = 0;
    let preisSorte4: number = 0;
    let preisVersand: number = 0;
    let adresse: string = "";


    //HTML aufbauen
    function writeHTML(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML: string ="";

        //Auswahl Waffel oder Becher
        childNodeHTML += "<h3>Waffel oder Becher?</h3>";
        for (let i: number = 0; i < formOptionen.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + formOptionen[i].name + " " + formOptionen[i].preis + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + formOptionen[i].name;
        }
        childNodeHTML += "<hr>";

        //Auswahl der Eissorten 

        //Sorte 1
        childNodeHTML += "<h4>Sorte 1:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte1'>";
        for (let i: number = 0; i < eissorte1.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte1[i].name + " " + eissorte1[i].preis + " Euro'>" + eissorte1[i].name + " " + eissorte1[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

         //Sorte 2
         childNodeHTML += "<h4>Sorte 2:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte2'>";
        for (let i: number = 0; i < eissorte2.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte2[i].name + " " + eissorte2[i].preis + " Euro'>" + eissorte2[i].name + " " + eissorte2[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        
         //Sorte 3
         childNodeHTML += "<h4>Sorte 3:</h4>";
         childNodeHTML += "<select name='Select' id='Sorte3'>";
         for (let i: number = 0; i < eissorte3.length; i++) {
             childNodeHTML += "<option value='" + i + eissorte3[i].name + " " + eissorte3[i].preis + " Euro'>" + eissorte3[i].name + " " + eissorte3[i].preis + " Euro</option>";
         }
         childNodeHTML += "</select>";
         childNodeHTML += "<hr>";

         //Sorte 4
         childNodeHTML += "<h4>Sorte 4:</h4>";
         childNodeHTML += "<select name='Select' id='Sorte4'>";
         for (let i: number = 0; i < eissorte4.length; i++) {
             childNodeHTML += "<option value='" + i + eissorte4[i].name + " " + eissorte4[i].preis + " Euro'>" + eissorte4[i].name + " " + eissorte4[i].preis + " Euro</option>";
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
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='Adresse hier eingeben' required/>";
        node.innerHTML += childNodeHTML;
    }

    function handleChange(_event: Event) {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //Becher oder Waffel - Preis
        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("Form");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisForm = formOptionen[priceIndex].preis;
            console.log(preisForm);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Sorte1
        if (target.id == "Sorte1") {
            let node: HTMLElement = document.getElementById("Vanilla");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisSorte1 = eissorte1[priceIndex].preis;
            console.log(preisSorte1);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Sorte 2
        if (target.id == "Sorte2") {
            let node: HTMLElement = document.getElementById("Chocolate");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisSorte2 = eissorte2[priceIndex].preis;
            console.log(preisSorte2);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

         //Sorte 3
         if (target.id == "Sorte3") {
            let node: HTMLElement = document.getElementById("Strawberry");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisSorte3 = eissorte3[priceIndex].preis;
            console.log(preisSorte3);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

         //Sorte 4
         if (target.id == "Sorte4") {
            let node: HTMLElement = document.getElementById("Apple");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisSorte4 = eissorte4[priceIndex].preis;
            console.log(preisSorte4);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        //Lieferoption
        if (target.id == "ship") {
            let node: HTMLElement = document.getElementById("Shipping");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisVersand = versandoptionen[priceIndex].preis;
            console.log(versandoptionen);
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
        childNodeHTML += (preisVersand + preisForm + preisSorte1 + preisSorte2 + preisSorte3 + preisSorte4);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";

        node.innerHTML = childNodeHTML;
    }

    // Checken ob alles ausgefüllt ist
    function checkCheckout(_event: Event): void {
        if (adresse == "" || preisForm == 0 || preisSorte1 == 0 || preisSorte2 == 0 || preisSorte3 == 0 || preisSorte4 == 0 || preisVersand == 0) {
            document.getElementById("missing").innerHTML = "Es fehlen Angaben";
        }

        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
}