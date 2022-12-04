import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { protectedFirebaseConfig } from "./protectedFirebaseConfig";

const app = initializeApp(protectedFirebaseConfig);
const auth = getAuth(app);

export {app, auth}