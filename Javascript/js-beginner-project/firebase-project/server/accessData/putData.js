import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";

import "../database/connectDatabase.js";

const db = getFirestore();

const studentsData = {
  ad: "Ali",
  soyad: "Tan",
  sınıf: "4",
  veli: "Ahmet Tan",
  yaş: "9",
};
const parentName = studentsData.veli.split(" ")[0];
const parentSurname = studentsData.veli.split(" ")[1];
const parentData = {
  ad: parentName,
  soyad: parentSurname,
};

const sendStudent = await db.collection("students").doc().set(studentsData);
const sendParent = await db.collection("parents").doc().set(parentData);
