import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import "../database/connectFirebase.js";

const db = getFirestore();

// //Students İnfo
const user = db.collection("students").doc("0rmtczbSWNlkWM1SfqK7");
const doc = await user.get();
const data = doc.data();
console.log(doc)

// //Parent İnfo
// const parents = db.collection("parents").doc(data.veli);
// const document = await parents.get();
// const parentData = document.data();

// console.log(data);
// console.log(parentData);


