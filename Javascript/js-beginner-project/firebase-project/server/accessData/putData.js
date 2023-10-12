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
  ad: "Ahmet",
  soyad: "Öz",
  sinif: "3",
  veli: "Ali Öz",
  yas: "9",
};
const parentName = studentsData.veli.split(" ")[0];
const parentSurname = studentsData.veli.split(" ")[1];
const parentData = {
  ad: parentName,
  soyad: parentSurname,
};

const sendStudent = await db.collection("students").add(studentsData);
const sendParent = await db.collection("parents").add(parentData);

const parentId = sendParent.id;
const studentId = sendStudent.id;

const getStudent = db.collection("students").doc(studentId);

const updateStudent = await getStudent.update({ veli: parentId });
