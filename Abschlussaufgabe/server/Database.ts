/* Aufgabe: Abschlussaufgabe
Name: Jonas Meujen
Matrikel: 260231
Datum: 27.07.2019 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let abschlussaufgabe: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://FlappyFishGame:FlappyFishGame@cluster0-oy8uv.mongodb.net/Fleischfackeln24";
    databaseName = "Fleischfackeln24";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, handleConnect);

// connect-handler receives two standard parameters, an error object and a database object
function handleConnect(_e: Mongo.MongoError, _db: Mongo.Db): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _db.db(databaseName);
        abschlussaufgabe = db.collection("Abschlussaufgabe");
    }
}

export function insert(_doc: StudentData): void {
    // try insertion then activate callback "handleInsert"
    abschlussaufgabe.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}


// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = abschlussaufgabe.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else {
            // stringify creates a json-string, passed it back to _callback
            console.log("Datenbank: " + JSON.stringify(studentArray));
            _callback(JSON.stringify(studentArray));
        }
    }
}