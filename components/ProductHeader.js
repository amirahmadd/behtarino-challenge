import { Grid, Rating, Typography } from "@mui/material";
import style from "./ProductHeader.module.css";

const ProductHeader = (props) => {
  const { product } = props;
  const {
    rating: { rate },
  } = product;
  return (
    <div className={style.productHeaderContainer}>
      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Typography variant="h5" className={style.title}>
            {product.title}
          </Typography>
        </Grid>
        <Grid item alignContent="flex-end">
          <Rating
            name="rating"
            value={rate}
            readOnly
            precision={0.5}
            className={style.ratingStars}
          />
        </Grid>
      </Grid>
      <div>
        <Typography variant="caption" className={style.caption}>
          {product.category}
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle1" className={style.price}>
          ${product.price}
        </Typography>
      </div>
    </div>
  );
};

export default ProductHeader;
