import { useEffect, useState } from "react";

import { auth } from "../../config";

import Headling from "../../components/Headling/Headling";
import { FilmCart } from "../../components/FilmCart";
import { LocalInterface } from "../../types/types";

import s from "./History.module.css";
import { getHistoryFilms } from "../../utils";

export default function HistoryPage() {
  const [historyFilms, setHistoryfilms] = useState<LocalInterface[]>([]);
  const user = auth.currentUser;
  const userEmail = user?.email;

  useEffect(() => {
    getHistoryFilms(userEmail!).then((films) => setHistoryfilms(films));
  }, []);

  return (
    <div className={s["wrapper"]}>
      <Headling>History</Headling>
      <div className={s["history-wrapper"]}>
        {historyFilms.length === 0 && <h2>History is empty</h2>}
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
    </div>
  );
}
