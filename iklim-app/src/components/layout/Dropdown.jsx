import React from "react";

import Select, { components } from "react-select";
import { groupedOptions, sumatraCitiesOptions } from "../../helper/dataCity";

const Menu = props => {
  return (
    <>
      <components.Menu {...props}>{props.children}</components.Menu>
    </>
  );
};

const fontColorStyle = {
  menu: (provided, state) => ({
    ...provided,
    color: state.selectProps.fontColor
  })
};

export default props => (
  <Select
    defaultValue={sumatraCitiesOptions[0]}
    options={groupedOptions}
    components={{ Menu }}
    onChange={props.selectOnChange}
    fontColor='#333333'
    styles={fontColorStyle}
    theme={theme => ({
      ...theme,
      borderRadius: 4,
      colors: {
        ...theme.colors,
        primary: "grey",
        primary25: "#3dc1d3"
      }
    })}
  />
);
