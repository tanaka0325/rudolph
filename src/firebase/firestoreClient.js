import * as firebase from "firebase";

import { firebaseConfig } from "./config";

require("firebase/firestore");
firebase.initializeApp(firebaseConfig);

export default class firestoreClient {
  dbName;
  db;
  constructor(dbName) {
    this.dbName = dbName;
    this.db = firebase.firestore();
  }

  fetch(date) {
    return new Promise(resolve => {
      this.db
        .collection("date")
        .doc(date)
        .collection(this.dbName)
        .orderBy("created_at", "desc")
        .get()
        .then(querySnapshot => {
          resolve(querySnapshot);
        })
        .catch(error => {
          console.debug("Get error: ", error);
        });
    });
  }

  add(date, task) {
    return new Promise(resolve => {
      this.db
        .collection("date")
        .doc(date)
        .collection(this.dbName)
        .add(task)
        .then(docRef => {
          resolve(docRef);
        })
        .catch(error => {
          console.debug("add Error: ", error);
        });
    });
  }
}
