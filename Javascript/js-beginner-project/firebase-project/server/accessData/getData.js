import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import "../database/connectDatabase.js"



const db = getFirestore();



const user = db.collection('person-info').doc('first-person');
const doc = await user.get();

console.log(doc.data());

