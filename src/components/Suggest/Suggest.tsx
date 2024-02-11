import { SuggestType } from "./Suggest.props";
import { SuggestItem } from "./SuggestItem";

import s from "./Suggest.module.css";

export const Suggest = ({ films, searchText }: SuggestType) => {
  return (
    <div className={s["suggest-wrapper"]}>
      {films?.length
        ? films.map((item) => <SuggestItem key={item.filmId} {...item} />)
        : `We haven't any data for "${searchText}"`}
    </div>
  );
};
