import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";

import { db } from "../../config/firebase-config";

import { FilmCart } from "../../components/FilmCart";
import { LocalInterface, DataBaseInterface } from "../../types/types";

import s from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const [favoritesFilms, setFavoritesFilms] = useState<LocalInterface[]>([]);
  const isAuth = getAuth();
  const userEmail = isAuth.currentUser?.email;

  useEffect(() => {
    const favRef = collection(db, `${userEmail}favorites`);
    const getFavoritesFilms = async () => {
      const data = await getDocs(favRef);
      setFavoritesFilms(
        data.docs.map((doc) => ({
          ...(doc.data() as DataBaseInterface),
          filmId: doc.id,
        }))
      );
    };
    getFavoritesFilms();
  }, []);

  return (
    <div className={s["favorites-wrapper"]}>
      {favoritesFilms.map((film) => {
        return (
          <FilmCart
            key={film.filmId}
            id={film.id}
            image={film.posterUrl}
            name={film.nameRu}
            rating={film.ratingKinopoisk}
            year={film.year}
            title={film.nameRu}
          />
        );
      })}
    </div>
  );
}
