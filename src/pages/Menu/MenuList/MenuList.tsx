import ProductCart from "../../../components/ProductCard/ProductCard";
import { MenuListPropsType } from "./MenuList.props";

export const MenuList = ({ data }: MenuListPropsType) =>
  data.map((item) => {
    return (
      <ProductCart
        id={item.id}
        title={item.title}
        description={item.tabTitle}
        price={10}
        rating={5}
        image={item.image}
      />
    );
  });
