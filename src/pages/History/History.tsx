import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";

import { db } from "../../config/firebase-config";

import { FilmCart } from "../../components/FilmCart";
import { LocalInterface, DataBaseInterface } from "../../types/types";

import s from "./History.module.css";
import Headling from "../../components/Headling/Headling";

export const History = () => {
  const [historyFilms, setHistoryfilms] = useState<LocalInterface[]>([]);
  const isAuth = getAuth();
  const userEmail = isAuth.currentUser?.email;

  useEffect(() => {
    const filmsRef = collection(db, `${userEmail}history`);
    const getHistoryFilms = async () => {
      const data = await getDocs(filmsRef);
      setHistoryfilms(
        data.docs.map((doc) => ({
          ...(doc.data() as DataBaseInterface),
          filmId: doc.id,
        }))
      );
    };
    getHistoryFilms();
  }, []);

  return (
    <>
      <Headling>History</Headling>
      <div className={s["history-wrapper"]}>
        {historyFilms.map((film) => {
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
    </>
  );
};
