import { Divider, Grid } from "@mui/material";
import { useState } from "react";
import DropDown from "./DropDown";
import style from "./ProductOptions.module.css";

const productColors = [
  { id: 1, color: "#63f3c9" },
  { id: 2, color: "#ffff72" },
  { id: 3, color: "#ff7a76" },
  { id: 4, color: "#d6e2e1" },
  { id: 5, color: "black" },
];
const productSize = [
  { id: 1, title: "UK 7" },
  { id: 2, title: "UK 8" },
  { id: 3, title: "UK 9" },
];
const productAvailableCount = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
];

const ProductOptions = () => {
  const [selected, setSelected] = useState(productColors[0].id);
  const clickHandler = (color) => {
    setSelected(color.id);
  };
  return (
    <div className={style.optionContainer}>
      <Grid container justifyContent="center">
        <Grid item md={6} xs={12}>
          <div className={style.colorTitle}>COLOR</div>
          <div className={style.colorSelect}>
            {productColors.map((color) => (
              <span
                key={color.id}
                className={
                  selected === color.id ? style.ActiveColorBall : style.noBorder
                }
                style={{ borderColor: color.color }}
              >
                <span
                  className={style.colorBall}
                  //   selected === color ? style.ActiveColorBall :
                  style={{ backgroundColor: color.color }}
                  onClick={() => clickHandler(color)}
                />
              </span>
            ))}
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className={style.optionTitle}>SIZE</div>
          <div className={style.WithBorderOption}>
            <DropDown title="SIZE" options={productSize} />
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
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
