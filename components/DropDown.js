import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import style from "./DropDown.module.css";
import { KeyboardArrowDown } from "@mui/icons-material";

const DropDown = (props) => {
  const { options, title } = props;
  const [value, setValue] = useState(options[0]?.id);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Select
        labelId={`${title}-select`}
        id={`${title}-select`}
        value={value}
        label={title}
        className={style.select}
        variant="standard"
        disableUnderline
        onChange={handleChange}
        IconComponent={(props) => (
          <i
            {...props}
            className={`material-icons ${props.className} ${style.icon}`}
          >
            <KeyboardArrowDown />
          </i>
        )}
      >
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            ({item.title})
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropDown;
