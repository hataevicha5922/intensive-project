/* eslint-disable no-console */
import { Link } from "react-router-dom";
import s from "./FilmCard.module.css";
import { FilmCardProps } from "./FilmCard.props";
import { useMemo } from "react";

export const FilmCart = (props: FilmCardProps) => {
  const cardHeadStyles = useMemo(
    () => ({
      backgroundImage: `url(${props.image})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
    }),
    [props.image]
  );

  return (
    <Link to={`/film/${props.id}`} className={s["link"]}>
      <div className={s["card"]}>
        <div className={s["card-head"]} style={cardHeadStyles}>
          <div className={s["price"]}>{props.price}</div>
          <button className={s["add-to-card"]}>
            <img src="./public/bag-2-svgrepo-com.svg" alt="AddToCard" />
          </button>
          <div className={s["rating"]}>
            {props.rating}&nbsp;
            <img
              src="../../../public/star-sharp-svgrepo-com.svg"
              alt="Rating Star"
            />
          </div>
        </div>
        <div className={s["card-footer"]}>
          <div className={s["title"]}>{props.title}</div>
          <div className={s["description"]}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
};
