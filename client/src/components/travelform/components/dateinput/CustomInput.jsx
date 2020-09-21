import React from "react";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <button className="CustomInput__btn" onClick={props.onClick} ref={ref}>
      {props.value || props.placeholder}
    </button>
  );
});

export default CustomInput;
