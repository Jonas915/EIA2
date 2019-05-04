/* Aufgabe: 5
Name: Jonas Meujen
Matrikel: 260231
Datum: 28.04.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe5 {

    export interface products{
        name:string,
        preis: number,
    }

    export let formOptionen: products[] = [{ name: "Becher", preis: 2}, { name: "Waffel", preis: 2}];
    export let eissorte1: products[] = [{name:"keine ausgewählt", preis: 0}, {name: "Himbeere", preis: 2}, { name: "Vanille", preis: 2}, { name: "Schokolade", preis: 2}, { name: "Erdbeere", preis: 2 }, { name: "Apfel", preis: 2 }];
    export let eissorte2: products[] = [{name:"keine weitere", preis: 0}, { name: "Vanille", preis: 2}, { name: "Schokolade", preis: 2}, { name: "Erdbeere", preis: 2 }, { name: "Apfel", preis: 2 }];
    export let eissorte3: products[] = [{name:"keine weitere", preis: 0}, { name: "Vanille", preis: 2}, { name: "Schokolade", preis: 2}, { name: "Erdbeere", preis: 2 }, { name: "Apfel", preis: 2 }];
    export let eissorte4: products[] = [{name:"keine weitere", preis: 0}, { name: "Vanille", preis: 2}, { name: "Schokolade", preis: 2}, { name: "Erdbeere", preis: 2 }, { name: "Apfel", preis: 2 }];
    export let versandoptionen: products[] = [{name:"keine ausgewählt", preis:0}, { name: "DHL", preis: 4 }, { name: "DPD", preis: 5 }, { name: "Brieftaube", preis: 10 }];
}