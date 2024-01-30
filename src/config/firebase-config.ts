import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC97eg6VUpKpr0XOQDNRvekBCsk-rvNnKo",
  authDomain: "intensive-project-6d8db.firebaseapp.com",
  projectId: "intensive-project-6d8db",
  storageBucket: "intensive-project-6d8db.appspot.com",
  messagingSenderId: "314435741162",
  appId: "1:314435741162:web:d5f384018a13719ee47e93",
  measurementId: "G-405DF4H5PR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
