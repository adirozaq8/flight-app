import React from "react";
import DatePicker from "react-datepicker";
import CustomInput from "./CustomInput";

import "react-datepicker/dist/react-datepicker.css";

// TODO move this state to redux

class DateInput extends React.Component {
  constructor(props) {
    super(props);
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
          //showTimeSelect
          dateFormat="d MMMM yyyy"
          customInput={<CustomInput />}
        />
      </>
    );
  }
}

export default DateInput;
