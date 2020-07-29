import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DateInput extends React.Component {
  state = {
    startDate: new Date(),
    date: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
      date: date,
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="Pp"
      />
    );
  }
}

export default DateInput;
