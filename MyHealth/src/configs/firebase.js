import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore"

import { protectedFirebaseConfig } from "./protectedFirebaseConfig";

const app = initializeApp(protectedFirebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {app, auth, db}