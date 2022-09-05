import { Divider, Grid } from "@mui/material";
import { useState } from "react";
import style from "./ProductOptions.module.css";

const colors = ["#63f3c9", "#ffff72", "#ff7a76", "#d6e2e1", "black"];

const ProductOptions = () => {
  const [selected, setSelected] = useState(colors[0]);
  const clickHandler = (color) => {
    setSelected(color);
  };
  return (
    <div className={style.optionContainer}>
      <Grid container justifyContent="center">
        <Grid item md={6} xs={12}>
          <div className={style.colorTitle}>COLOR</div>
          <div className={style.colorSelect}>
            {colors.map((color) => (
              <span
                key={color}
                className={
                  selected === color ? style.ActiveColorBall : style.noBorder
                }
                style={{ borderColor: color }}
              >
                <span
                  className={style.colorBall}
                  //   selected === color ? style.ActiveColorBall :
                  style={{ backgroundColor: color }}
                  onClick={() => clickHandler(color)}
                />
              </span>
            ))}
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className={style.optionTitle}>SIZE</div>
          <div className={style.WithBorderOption}>size</div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className={style.optionTitle}>COUNT</div>
          <div className={style.option}>count</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductOptions;
