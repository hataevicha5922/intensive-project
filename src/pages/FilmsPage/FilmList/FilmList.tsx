import { FilmCart } from "../../../components/FilmCart/FilmCart";
import { FilmListPropsType } from "./FilmList.props";

import s from "./FilmList.module.css";
import Headling from "../../../components/Headling/Headling";
import { useAppSelector } from "../../../hooks";
import { getUserSelector } from "../../../store";

export const FilmList = ({ data }: FilmListPropsType) => {
  const user = useAppSelector(getUserSelector)!;

  return (
    <div className={s["wrapper"]}>
      { user && <Headling>Home</Headling>}
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
    </div>
  );
};
