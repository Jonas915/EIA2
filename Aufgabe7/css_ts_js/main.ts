/* Aufgabe: 7
Name: Jonas Meujen 
Matrikel: 260231
Datum: 12.05.2019 
Bei diesem Code hatte ich z.T. Hilfe von Markus Damm und Lukas Kodalle.*/

namespace eisdealer {
    window.addEventListener("load", init);
    let address: string = "https://fleischfackeln24.herokuapp.com/?";

    let legend: HTMLLegendElement = document.createElement("legend");
    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    

    function init(_event: Event): void {
        console.log(categories);
        displayEis1(categories);
        rdy();
    }

    //HTML bauen
    function displayEis1(_cat: KeyArray): void {

        document.getElementById("action").appendChild(fieldset);
        legend.innerHTML = "Optionen wählen";
        fieldset.appendChild(legend);
        for (let kategorie in _cat) {
            let value: Eiskategorie[] = _cat[kategorie];
            for (let i: number = 0; i < value.length; i++)
                displayEis2(value[i]);
        }
    }

    function displayEis2(_eis: Eiskategorie): void {
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        label.setAttribute("for", _eis.name);
        label.innerHTML = _eis.name;
        switch (_eis.type) {
            case "radio":
                input.setAttribute("type", _eis.type);
                input.setAttribute("name", "Darreichungsform");
                input.setAttribute("price", "2");
                input.setAttribute("value", _eis.name);
                break;
            case "number":
                input.setAttribute("type", _eis.type);
                input.setAttribute("name", _eis.name);
                input.setAttribute("step", "1");
                input.setAttribute("min", "0");
                input.setAttribute("max", "5");
                input.setAttribute("value", "0");
                input.setAttribute("price", "2");
                break;
            case "checkbox":
                input.setAttribute("type", _eis.type);
                input.setAttribute("price", "2");
                input.setAttribute("name", _eis.name);
                input.setAttribute("value", "yes");
                break;
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }

    // Änderungen
        function rdy(): void {
        document.getElementById("bestellen").addEventListener("click", missing);
        console.log("loaded");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", click);
        }
    }
    
    function click(_event: Event): void {
        let check: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");let start: number = 0;
        document.getElementById("sorten").innerHTML = " ";
        document.getElementById("price").innerHTML = " ";
        document.getElementById("form").innerHTML = " ";
        document.getElementById("shipping").innerHTML = " ";
        document.getElementById("toppings").innerHTML = " "; 
        for (let i: number = 0; i < check.length; i++) {
            if (check[i].checked == true && check[i].getAttribute("value") == "yes") {                
                let price: number = Number(check[i].getAttribute("price"));
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + "Euro";
                let toppings: HTMLElement = document.createElement("li");
                toppings.setAttribute("id", `${check[i].name}`);
                toppings.innerHTML = `${check[i].name}`;
                document.getElementById("toppings").appendChild(toppings);
            }
            if (check[i].checked == true && check[i].getAttribute("name") == "Darreichungsform") {
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + "Euro";
                let form: HTMLElement = document.createElement("li");
                form.setAttribute("id", `${check[i].value}`);
                form.innerHTML = `${check[i].getAttribute("value")}`;
                document.getElementById("form").appendChild(form);
            }
            if (check[i].type == "number" && Number(check[i].value) > 0) {
                let price: number = Number(check[i].value);
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + "Euro";
                let sorten: HTMLElement = document.createElement("li");
                sorten.setAttribute("id", `${check[i].value}_x_${check[i].name}`);
                sorten.innerHTML = `${check[i].value} ${check[i].name}`;
                document.getElementById("sorten").appendChild(sorten);
            }
            if (check[i].checked == true && check[i].name == "shipping") {
                let price: number = Number(check[i].getAttribute("price"));
                start += price;
                document.getElementById("price").innerHTML = start.toFixed(2).toString() + "Euro";
                let shipping: HTMLElement = document.createElement("li");
                shipping.setAttribute("id", `${check[i].getAttribute("bezeichnung")}`);
                shipping.innerHTML = `${check[i].getAttribute("bezeichnung")}`;
                document.getElementById("shipping").appendChild(shipping);
        }
    }
}
//Bestellung checken ob alles ausgefüllt ist
    function missing(): void {
        let empty: string[] = [];
        let missing: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let sorten: number = 0;
        for (let i: number = 0; i < missing.length; i++) {            
            if (missing[i].type == "text")
                if (missing[i].value == "") {
                    let feldName: string = missing[i].name;
                    empty.push(feldName);
            }
            if (missing[i].type == "number") {
                if (Number(missing[i].value) > 0) {
                    sorten = 1;
                }
            }
        } 
        if (sorten == 0) {
            alert("Bitte wähl eine Sorte");
        }
        if (empty.length == 0) {
            alert("Danke für die Bestellung");
            let liste: HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName("li"); 
            for (let i: number = 0; i < liste.length; i++) {
                address += `${liste[i].id}&`;
            }
            address += `${document.getElementById("price").innerHTML}` ;
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            console.log(address);
            xhr.open("GET", address, true);
            xhr.addEventListener("readystatechange", finishRequest);
            xhr.send();
        }   
        else {
            alert(`Gib bitte noch ${empty} an.`);
        }
    }
    
//Serverantwort verarbeiten
    function finishRequest(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("response: " + xhr.response);
            let fieldset2nd: HTMLFieldSetElement = document.createElement("fieldset");
            document.getElementById("action").appendChild(fieldset2nd);
            
            fieldset2nd.setAttribute("id", "server");
            if (document.getElementById) {
            fieldset2nd.innerHTML = "Wir haben deine Bestellung erhalten. Deine Bestellung besteht aus:" + xhr.response;
            console.log();
            address = "https://fleischfackeln24.herokuapp.com/?";
            }
        }
    }
}