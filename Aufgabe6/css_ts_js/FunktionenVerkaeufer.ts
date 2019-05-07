/* Aufgabe: 6
Name: Jonas Meujen
Matrikel: 260231
Datum: 28.04.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe5 {
    export interface aussen{
        [key:string]:products[];
    }
    
    export interface products{
        name:string,
        preis: number,
    }
    export let aussenArray:aussen={
        "formOptionen":[{ name: "Becher", preis: 2}, 
                        { name: "Waffel", preis: 2}],
        "eissorte1":[
                    {name:"keine ausgewählt", preis: 0}, 
                    {name: "Himbeere", preis: 2}, 
                    { name: "Vanille", preis: 2}, 
                    { name: "Schokolade", preis: 2}, 
                    { name: "Erdbeere", preis: 2 }, 
                    { name: "Apfel", preis: 2 }],
        "eissorte2":[
                    {name:"keine ausgewählt", preis: 0}, 
                    {name: "Himbeere", preis: 2}, 
                    { name: "Vanille", preis: 2}, 
                    { name: "Schokolade", preis: 2}, 
                    { name: "Erdbeere", preis: 2 }, 
                    { name: "Apfel", preis: 2 }],
        "eissorte3":[
                    {name:"keine ausgewählt", preis: 0}, 
                    {name: "Himbeere", preis: 2}, 
                    { name: "Vanille", preis: 2}, 
                    { name: "Schokolade", preis: 2}, 
                    { name: "Erdbeere", preis: 2 }, 
                    { name: "Apfel", preis: 2 }],
        "eissorte4":[
                    {name:"keine ausgewählt", preis: 0}, 
                    {name: "Himbeere", preis: 2}, 
                    { name: "Vanille", preis: 2}, 
                    { name: "Schokolade", preis: 2}, 
                    { name: "Erdbeere", preis: 2 }, 
                    { name: "Apfel", preis: 2 }],
        "versandoptionen":[
                    {name:"keine ausgewählt", preis:0}, 
                    { name: "DHL", preis: 4 }, 
                    { name: "DPD", preis: 5 }, 
                    { name: "Brieftaube", preis: 10 }]
    }
}