import React from 'react';

class DateAndTime extends React.Component {
  state = {time: "", date: ""};

  componentDidMount = () => {
    setInterval(() => {
      let today = new Date();

      let time = today.toLocaleTimeString("en-UK");
      this.setState({time: time});

      let date = today.toLocaleDateString("en-UK")
      this.setState({date: date})
    }, 1000)
  }

  render() {
    return (
      <div id="dateAndTime">
        <p>{this.state.time}</p>
        <p>{this.state.date}</p>
      </div>

    )
  }
}

export default DateAndTime;
