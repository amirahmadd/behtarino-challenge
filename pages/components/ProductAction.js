import { Button, IconButton } from "@mui/material";
import style from "./ProductAction.module.css";
import { Share, LocalGroceryStore } from "@mui/icons-material";

const ProductAction = (props) => {
  const { addToCart, loading } = props;
  return (
    <div className={style.actionContainer}>
      <Button
        startIcon={<LocalGroceryStore />}
        variant="contained"
        className={style.button}
        onClick={addToCart}
        disabled={loading}
      >
        ADD TO CART
      </Button>
      <IconButton className={style.iconBtn}>
        <Share className={style.shareBtn} />
      </IconButton>
    </div>
  );
};

export default ProductAction;
