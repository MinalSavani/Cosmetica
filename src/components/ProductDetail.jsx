import { useParams } from "react-router-dom";
import { jeansData } from "./Pages/Jeans";

const ProductDetail = () => {
  const { id } = useParams(); // ⬅️ gives you the product ID from URL

  const product = jeansData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <img src={product.image} />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
};
export default ProductDetail;
