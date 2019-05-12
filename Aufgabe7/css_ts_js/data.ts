/* Aufgabe: 7
Name: Jonas Meujen 
Matrikel: 260231
Datum: 12.05.2019 
Bei diesem Code hatte ich z.T. Hilfe von Markus Damm und Lukas Kodalle.*/

namespace eisdealer {
    export interface Eiskategorie {
        name: string;
        price: number;
        type: string;
    }

    export interface KeyArray {
        [kategorie: string]: Eiskategorie[];
    }
    
    export let categories: KeyArray = {
        "form": [
            { name: "Becher", price: 2, type: "radio"},
            { name: "Waffel", price: 2, type: "radio"}], 

        "eisSorten": [
            { name: "Himbeere", price: 2, type: "number"},
            { name: "Vanille", price: 2, type: "number"},
            { name: "Schokolade", price: 2, type: "number"},
            { name: "Erdbeere", price: 2, type: "number"},
            { name: "Apfel", price: 2, type: "number"}],

        "toppings": [
            { name: "Schlachsahne", price: 2, type: "checkbox"},
            { name: "Smarties", price: 2, type: "checkbox"},
            { name: "Sosse", price: 2, type: "checkbox"}],
    }
}