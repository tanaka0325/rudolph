import * as firebase from "firebase";

import { firebaseConfig } from "./config";

require("firebase/firestore");
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
