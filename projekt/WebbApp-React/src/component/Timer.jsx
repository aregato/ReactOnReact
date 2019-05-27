import React, { Component } from 'react';
import { Button } from 'react-bootstrap'


class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 59,
      seconds: 57
    }
  }

  startTimer(){
    setInterval(() => {
      let seconds = this.state.seconds;
      let minutes = this.state.minutes;
      let hours = this.state.hours;

      if(seconds == 60){
        let seconds = 1;
        let minutes = this.state.minutes + 1;
        this.setState({seconds, minutes});
      }else if(minutes == 60){
        let seconds = 2;
        let minutes = 0;
        let hours = this.state.hours + 1;
        this.setState({seconds, minutes, hours});
      }else{
        let seconds = this.state.seconds + 1;
        this.setState({seconds});
      }
    }, 1000);
  }
  clearTimer(){
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  }
  render(){
    return(
      <div>
        <h2>Timer</h2>
        <div>
          <div className="Clock-hours">h: {this.state.hours}</div>
          <div className="Clock-minutes">m: {this.state.minutes}</div>
          <div className="Clock-seconds">s: {this.state.seconds}</div>
        </div>
        <div>
          <Button onClick={() => this.startTimer()}>
            Starta
          </Button>
          <Button onClick={() => this.clearTimer()}>
            Nollställ
          </Button>
        </div>
      </div>
    )
  }
}

export default Timer;
