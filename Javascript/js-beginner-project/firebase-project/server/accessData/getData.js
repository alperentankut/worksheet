import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import "../database/connectDatabase.js"



const db = getFirestore();

//Students İnfo
const user = db.collection('students').doc("0rmtczbSWNlkWM1SfqK7")
const doc = await user.get();
const data = doc.data()


//Parent İnfo
const parents = db.collection("parents").doc(data.veli)
const document = await parents.get()
const lastData = document.data()

console.log(data);
console.log(lastData)



