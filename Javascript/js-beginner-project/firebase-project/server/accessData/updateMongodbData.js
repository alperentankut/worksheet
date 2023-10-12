import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
  QuerySnapshot,
} from "firebase-admin/firestore";
import { MongoClient } from "mongodb";
import "../database/connectFirebase.js";
// import "../database/connectMongodb.js";
import microtime from "microtime";

const db = getFirestore();
const uri =
  "mongodb+srv://alptan:At7289621-@cluster0.fr4c73s.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db("random");
const random = database.collection("random-string");

const firestoreDatabase = db.collection("random");

const syncTime = db.collection("synchronize time");
const doc = await syncTime.orderBy("synchronize_time", "desc").limit(1).get();

let time;
let id;

doc.forEach((el) => {
  let temp = el.data();
  id = el.id;
  time = temp.synchronize_time;
});
const time_ = db.collection("synchronize time").doc(id);
const lastTime = await time_.get();

const result = await firestoreDatabase.where("modified_time", ">", time).get();
const data = firestoreDatabase.where("modified_time", ">", time);
const count = await data.count().get();
const lastCount = count.data().count;
console.log(lastCount);

let nowDate = new Date().getDate();

if (lastCount === 0) {
  console.log("No data");
} else if (nowDate === new Date(lastTime.data().synchronize_time).getDate()) {
  console.log("You can only update the data once on the same day");
} else {
  result.forEach(async (el) => {
    let id = el.data().id;
    const push = random.updateMany({ id: id }, { $set: el.data() });
  });
  const updateSync = () =>
    syncTime.add({ synchronize_time: new Date().getTime() });
  updateSync();
}

