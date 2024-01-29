import { Link } from "react-router-dom";
import s from "./ProductCard.module.css";
import { ProductCatdProps } from "./ProductCard.props";
import { useMemo } from "react";

const ProductCart = (props: ProductCatdProps) => {
  const cardHeadStyles = useMemo(
    () => ({
      backgroundImage: `url(${props.image})`,
      backgroundSize: "contain",
      backgroundPosition: "center"
    }),
    [props.image]
  );
  return (
    <Link to={`/product/${props.id}`} className={s["link"]}>
      <div className={s["card"]}>
        <div className={s["card-head"]} style={cardHeadStyles}>
          <div className={s["price"]}>
            {props.price}&nbsp;
            <span className={s["currency"]}>$</span>
          </div>
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

export default ProductCart;