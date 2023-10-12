import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import microtime from "microtime"
import "../database/connectFirebase.js";

const db = getFirestore();

const data = db.collection("random").doc("DA5aCR9bBaWVuEZ3J7ik");
console.log(data)
const updateData = async () => {
  await data.update({job: "police" });
  await data.update({modified_time: new Date().getTime()})
};
updateData()


