import { Typography } from "@mui/material";
import style from "./ProductDescription.module.css";

const ProductDescription = (props) => {
  const { description } = props;
  return (
    <div>
      <Typography variant="body1" className={style.sectionTitle}>
        DESCRIPTION
      </Typography>
      <Typography variant="subtitle2" className={style.productDescription}>
        {description}
      </Typography>
    </div>
  );
};

export default ProductDescription;
