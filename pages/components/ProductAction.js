import { Button, IconButton } from "@mui/material";
import style from "./ProductAction.module.css";
import { Share, LocalGroceryStore } from "@mui/icons-material";

const ProductAction = () => {
  return (
    <div className={style.actionContainer}>
      <Button
        startIcon={<LocalGroceryStore />}
        variant="contained"
        className={style.button}
      >
        ADD TO CART
      </Button>
      <IconButton>
        <Share className={style.shareBtn} />
      </IconButton>
    </div>
  );
};

export default ProductAction;
