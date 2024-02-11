import { signOut } from "firebase/auth";
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
