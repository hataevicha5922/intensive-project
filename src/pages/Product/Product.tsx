import { useLoaderData } from "react-router-dom";
import { NewsInterface } from "../../api/api.interface";

const Product = () => {
  const data = useLoaderData() as NewsInterface;

  return <>Product {data.title}</>;
};

export default Product;
