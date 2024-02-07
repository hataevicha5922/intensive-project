import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

import { auth, db } from "../config/firebase-config";
import { UserContextInterface } from "./utils-types";
import { FavoritesFilmInterface, setFavorites, store } from "../store";

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
  const favoriteFilms: FavoritesFilmInterface[] = data.docs.map((doc) => ({
    ...(doc.data() as FavoritesFilmInterface),
  }));

  store.dispatch(setFavorites(favoriteFilms));
};
