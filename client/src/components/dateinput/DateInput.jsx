import React from "react";
import DatePicker from "react-datepicker";
import CustomInput from "./CustomInput";

import "react-datepicker/dist/react-datepicker.css";

// TODO move this state to redux

class DateInput extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      date: new Date(),
      datePickerIsOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
      date: date,
    });
  };

  render() {
    return (
      <>
        <DatePicker
          selected={this.state.date}
          onChange={this.handleChange}
          popperPlacement="top-end"
          // modifiers easy access
          popperModifiers={{
            offset: {
              enabled: false,
              offset: "1px, 1px",
            },
            preventOverflow: {
              enabled: false,
              escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
              boundariesElement: "viewport",
            },
          }}
          //showTimeSelect
          dateFormat="d MMMM yyyy"
          customInput={<CustomInput />}
        />
      </>
    );
  }
}

export default DateInput;
