import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

import { fbConfig } from "../config.js";

export const firebaseApp = firebase.initializeApp(fbConfig);
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();
