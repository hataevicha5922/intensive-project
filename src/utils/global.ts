import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "../config/firebase-config";
import { UserContextInterface } from "./utils-types";
import { setFavorites, store } from "../store";
import { FilmInterface } from "../types/types";

export const getUser = () => {
  const userData = localStorage.getItem("user");

  return userData ? JSON.parse(userData) : null;
};

export const logInUser = (value: UserContextInterface) => {
  localStorage.setItem("user", JSON.stringify(value));
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    console.error(error);
  }
};

export const getFavoritesFilms = async (userEmail: string) => {
  const favRef = collection(db, `${userEmail}favorites`);
  const data = await getDocs(favRef);
  const favoriteFilms: FilmInterface[] = data.docs.map((doc) => ({
    ...(doc.data() as FilmInterface),
  }));

  store.dispatch(setFavorites(favoriteFilms));
};

export const addToFavorites = async (
  value: FilmInterface,
  userEmail: string
) => {
  try {
    await setDoc(doc(db, `${userEmail}favorites`, String(value.id)), value);
    await getFavoritesFilms(userEmail);
  } catch (error) {
    console.error(`Error from Firebase ${error}`);
  }
};

export const removeToFavorites = async (id: number, userEmail: string) => {
  try {
    await deleteDoc(doc(db, `${userEmail}favorites`, String(id)));
    await getFavoritesFilms(userEmail);
  } catch (error) {
    console.error(`Error from Firebase ${error}`);
  }
};

export const addToHistory = async (searchText: string, userEmail: string) => {
  try {
    await setDoc(doc(db, `${userEmail}history`, searchText), { searchText });
  } catch (error) {
    console.error(`Error from Firebase ${error}`);
  }
};

export const getHistory = async (userEmail: string) => {
  try {
    const docSnap = await getDocs(collection(db, `${userEmail}history`));

    return docSnap.docs.map((doc) => ({
      ...(doc.data() as { searchText: string }),
    }));
  } catch (error) {
    console.error("Error from firebase", error);
  }
};

export const logInUserInDB = ({
  data,
  successHandler,
  errorHandler,
}: {
  data: { email: string; password: string };
  successHandler: (data: UserCredential) => void;
  errorHandler: (data: string) => void;
}) => {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(successHandler)
    .catch(errorHandler);
};

export const regInUserInDB = ({
  data,
  successHandler,
  errorHandler,
}: {
  data: { email: string; password: string };
  successHandler: (data: UserCredential) => void;
  errorHandler: (data: string) => void;
}) => {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(successHandler)
    .catch(errorHandler);
};
