"use strict";
/* Aufgabe: Abschlussaufgabe
Name: Jonas Meujen
Matrikel: 260231
Datum: 27.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let abschlussaufgabe;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://FlappyFishGame:FlappyFishGame@cluster0-oy8uv.mongodb.net/Fleischfackeln24";
    databaseName = "Fleischfackeln24";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, handleConnect);
// connect-handler receives two standard parameters, an error object and a database object
function handleConnect(_e, _db) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _db.db(databaseName);
        abschlussaufgabe = db.collection("Abschlussaufgabe");
    }
}
function insert(_doc) {
    // try insertion then activate callback "handleInsert"
    abschlussaufgabe.insertOne(_doc, handleInsert);
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
// try to fetch all documents from database, then activate callback
function findAll(_callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = abschlussaufgabe.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else {
            // stringify creates a json-string, passed it back to _callback
            console.log("Datenbank: " + JSON.stringify(studentArray));
            _callback(JSON.stringify(studentArray));
        }
    }
}
exports.findAll = findAll;
//# sourceMappingURL=Database.js.map