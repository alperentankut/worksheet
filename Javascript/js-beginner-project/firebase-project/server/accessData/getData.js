import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import { getDoc, DocumentReference } from "firebase/firestore";
import "../database/connectDatabase.js"



const db = getFirestore();

const user = db.collection('students').doc("CNM2a1urkltJkrQbCnQL")
const doc = await user.get();
const id = doc.data().veli
const parents = db.collection("parents").doc(id)
const res = await parents.get()
console.log(res.data());



