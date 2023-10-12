import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
import randomstring from "randomstring"
import microtime from "microtime"

import "../database/connectFirebase.js";

const db = getFirestore();


for(let i = 0 ; i<=10 ; i++){
  let string = randomstring.generate({
    length: 10,
    charset: 'alphabetic'})
  let integer = randomstring.generate({
    length: 10,
    charset: 'numeric'})
    const randomData = {
      id : integer,
      name :string,
      surname : string,
      job :string,
  
      modified_time : new Date().getTime(),
    }
    const sendData = await db.collection("random").add(randomData)
  }

  
    