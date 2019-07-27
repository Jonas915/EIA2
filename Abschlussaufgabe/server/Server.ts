/* Aufgabe: Abschlussaufgabe
Name: Jonas Meujen
Matrikel: 260231
Datum: 27.07.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

import * as Http from "http";
import * as Url from "url";
import * as Database from "./Database";

console.log("Server starting");

let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);


function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: AssocStringString = <AssocStringString> Url.parse(_request.url, true).query;
    let command: string = query["command"];

    switch (command) {
        case "insert":
            let abschlussarbeit: StudentData = {
                name: query["name"],
                score: parseInt(query["score"])
            };
            Database.insert(abschlussarbeit);
            respond(_response, "Erfolgreich eingetragen!");
            break;
        case "refresh":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }

 
    function findCallback(json: string): void {
        respond(_response, json);
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.write(playerDataSort);
    _response.end();
}

function playerDataSort(_a: StudentData, _b: StudentData): number {
    let returnNumber: number;
    if (_a.score > _b.score) {
        returnNumber = 1;
    }
    else if (_a.score < _b.score) {
        returnNumber = -1;
    }
    else {
        returnNumber = 0;
    }
    return returnNumber;
}