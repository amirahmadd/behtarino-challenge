import { Grid } from "@mui/material";
import { useState } from "react";
import DropDown from "./DropDown";
import style from "./ProductOptions.module.css";
import ColorPicker from "./ColorPicker";
import {
  productSize,
  productColors,
  productAvailableCount,
} from "../constants/productDetails";

const ProductOptions = () => {
  const [selected, setSelected] = useState(productColors[0]?.id);
  const clickHandler = (color) => {
    setSelected(color.id);
  };

  return (
    <div className={style.optionContainer}>
      <Grid container justifyContent="center">
        <Grid item md={5} xs={12}>
          <div className={style.colorTitle}>COLOR</div>
          <ColorPicker
            clickHandler={clickHandler}
            selected={selected}
            productColors={productColors}
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <div className={style.optionTitle}>SIZE</div>
          <div className={style.WithBorderOption}>
            <DropDown title="SIZE" options={productSize} />
          </div>
        </Grid>
        <Grid item md={4} xs={6}>
          <div className={style.optionTitle}>QTY</div>
          <div className={style.option}>
            <DropDown title="QTY" options={productAvailableCount} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductOptions;
