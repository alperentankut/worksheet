import { MongoClient } from "mongodb";
import "../database/connectFirebase.js";
// import "../database/connectMongodb.js"
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import microtime from "microtime"

const db = getFirestore();

//MongoDb access to collection
const uri =
  "mongodb+srv://alptan:At7289621-@cluster0.fr4c73s.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db("random");
const random = database.collection("random-string");

const data = db.collection("random");
const addSyncTime = async () =>{
  const snapshot = await data.get();
  snapshot.forEach((doc) => {
  const result = random.insertOne(doc.data());
  
  });
}
const syncTime = () =>{
  const time = {
    synchronize_time : new Date().getTime()
  }
  const push = db.collection("synchronize time").doc().set(time)
}
syncTime()
addSyncTime()








