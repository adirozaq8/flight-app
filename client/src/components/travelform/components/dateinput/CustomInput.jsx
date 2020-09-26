import React from "react";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <button
      className="CustomInput__btn"
      onClick={props.onClick}
      ref={ref}
      value={props.value}
    >
      <span>{props.value || props.placeholder}</span>
    </button>
  );
});

export default CustomInput;
