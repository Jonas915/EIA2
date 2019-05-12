"use strict";
/* Aufgabe: 7
Name: Jonas Meujen
Matrikel: 260231
Datum: 12.05.2019
Dieser Code wurde von mir alleine geschrieben und nicht kopiert oder diktiert.*/
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
console.log("Starting server");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
server.listen(port);
function handleListen() {
    console.log("Listening");
}
function handleRequest(_request, _response) {
    console.log("Request");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let url = Url.parse(_request.url, true);
    for (let key in url.query)
        _response.write(key + ":" + url.query[key] + "<br/>");
    _response.end();
}
//# sourceMappingURL=Server.js.map