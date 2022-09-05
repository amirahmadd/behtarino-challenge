import ProductAction from "./ProductAction";
import style from "./ProductContent.module.css";
import ProductDescription from "./ProductDescription";
import ProductHeader from "./ProductHeader";

const ProductContent = (props) => {
  const { product } = props;
  return (
    <div className={style.contentContainer}>
      <ProductHeader product={product} />
      <ProductDescription description={product.description} />
      <ProductAction/>
    </div>
  );
};

export default ProductContent;
