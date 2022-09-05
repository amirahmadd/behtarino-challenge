import { Button } from "@mui/material";
import style from "./ProductAction.module.css";
const ProductAction = () => {
  return (
    <div className={style.actionContainer}>
      <Button variant="contained" className={style.button}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductAction;
