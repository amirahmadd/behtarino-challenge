import Image from "next/image";
import style from "./ProductImages.module.css";

const ProductImages = (props) => {
  const { src, productTitle } = props;

  return (
    <div className={style.imageSection}>
      <div className={style.imageContainer}>
        <Image
          loader={() => src}
          src={src}
          alt={productTitle}
          width="250px"
          height="250px"
        />
      </div>
    </div>
  );
};

export default ProductImages;
