import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";

import "../database/connectDatabase.js"

const db = getFirestore();

const data = {
    name : "Alperen",
    surname : "Tankut",
    age : "28",
    location : "Gaziantep"
}
const res = await db.collection("person-info").doc("second-person").set(data)