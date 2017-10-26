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

  fetch() {
    return new Promise(resolve => {
      this.db
        .collection(this.dbName)
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
    task.created_at = new Date();
    return new Promise(resolve => {
      this.db
        .collection("date")
        .doc(date)
        .collection("tasks")
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
