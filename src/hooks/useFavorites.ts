import { addDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { FavoritesFilmInterface } from "../store";

export const useFavorites = (key: string) => {
  const addToFavorites = async (value: FavoritesFilmInterface) => {
    try {
      await addDoc(collection(db, `${key}favorites`), value);
    } catch (error) {
      console.error(`Error from Firebase ${error}`);
    }
  };

  const getFavotitesFilm = async () => {
    try {
      const docSnap = await getDocs(collection(db, key));
      const films = docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      return films;
    } catch (error) {
      console.error("Error from firebase", error);
    }
  };

  return { addToFavorites, getFavotitesFilm };
};
