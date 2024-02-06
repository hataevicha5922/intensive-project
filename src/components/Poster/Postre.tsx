import { useContext } from "react";
import { MyDescriptionFilmContext } from "../../pages/Film";

import s from "./Poster.module.css";

export const Poster = () => {
  const { posterUrl } = useContext(MyDescriptionFilmContext);
  return (
    <div className={s["poster-wrapper"]}>
      <img src={posterUrl} alt="Poster" className={s["poster"]} />
    </div>
  );
};
