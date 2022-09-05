import style from "./ColorPicker.module.css";

const ColorPicker = (props) => {
  const { clickHandler, productColors, selected } = props;

  return (
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
  );
};

export default ColorPicker;
