/* eslint-disable no-console */
import { addDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase-config";

export interface FavoritesFilmInterface {
  id: number;
  posterUrl: string;
  nameRu: string;
  ratingKinopoisk: number;
  year: number;
}

export const useHistory = (key: string) => {
  const addToHistory = async (value: FavoritesFilmInterface) => {
    try {
      await addDoc(collection(db, `${key}history`), value);
    } catch (error) {
      console.error(`Error from Firebase ${error}`);
    }
  };

  const getHistory = async () => {
    try {
      const docSnap = await getDocs(collection(db, key));
      const films = docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      return films;
    } catch (error) {
      console.error("Error from firebase", error);
    }
  };

  return { addToHistory, getHistory };
};
