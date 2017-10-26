import * as firebase from "firebase";

import { firebaseConfig } from "./config";

require("firebase/firestore");
firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();

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

  add(title) {
    return new Promise(resolve => {
      this.db
        .collection(this.dbName)
        .add({ title })
        .then(docRef => {
          resolve(docRef);
        })
        .catch(error => {
          console.debug("add Error: ", error);
        });
    });
  }
}
