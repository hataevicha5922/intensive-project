import s from "./Menu.module.css";
import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import ProductCart from "../../components/ProductCard/ProductCard";
export function Menu() {
  return (
    <>
      <div className={s["head"]}>
        <Headling>Menu</Headling>
        <Search placeholder="Search" />
      </div>
      <div>
        <ProductCart
          id={1}
          title={"Title"}
          description={"Description"}
          price={10}
          rating={5}
          image="../../../public/pizza.jpg"
        />
      </div>
    </>
  );
}
