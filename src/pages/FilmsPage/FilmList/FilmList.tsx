import { FilmCart } from "../../../components/FilmCart/FilmCart";
import { FilmListPropsType } from "./FilmList.props";

import s from "./FilmList.module.css";

export const FilmList = ({ data }: FilmListPropsType) => {
  return (
    <div className={s["list-wrapper"]}>
      {data.map((item) => (
        <FilmCart
          key={item.kinopoiskId}
          id={item.kinopoiskId}
          title={item.nameOriginal || item.nameRu}
          // description={item.type}
          name={item.nameRu}
          rating={item.ratingImdb || item.ratingKinopoisk}
          image={item.posterUrlPreview}
          year={item.year}
        />
      ))}
    </div>
  );
};
