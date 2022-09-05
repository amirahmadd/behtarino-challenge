import { useAddToCart } from "../utils/useAddToCart";
import ProductAction from "./ProductAction";
import style from "./ProductContent.module.css";
import ProductDescription from "./ProductDescription";
import ProductHeader from "./ProductHeader";
import ProductOptions from "./ProductOptions";

const ProductContent = (props) => {
  const { product } = props;
  const { addToCart, loading } = useAddToCart(product.id);
  return (
    <div className={style.contentContainer}>
      <ProductHeader product={product} />
      <ProductDescription description={product.description} />
      <ProductOptions />
      <ProductAction addToCart={addToCart} loading={loading} />
    </div>
  );
};

export default ProductContent;
