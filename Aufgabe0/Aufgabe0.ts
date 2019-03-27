/**
Aufgabe: 0
Name: Jonas Meujen
Matrikel: 260231 
Datum: 22.03.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

namespace Aufgabe0 {
    function greet() {
        let name = prompt("Wie ist dein Name?");
        let node: HTMLElement = document.getElementById("content");
        node.innerHTML += "Hey " + name + ",wie geht es dir?";
        
        console.log("Hey", name, ",wie geht es dir?")
    }

    document.addEventListener('DOMContentLoaded', greet);
}
