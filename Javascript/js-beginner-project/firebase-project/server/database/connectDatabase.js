import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";

import serviceAccount from "../key/serviceAccountKey.json" assert { type: "json" };

initializeApp({
  credential: cert(serviceAccount),
});
console.log("Firebase connection succesfully")





