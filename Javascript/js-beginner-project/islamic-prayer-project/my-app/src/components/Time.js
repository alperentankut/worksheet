import React, { Component } from 'react'

export default class Time extends Component {
  render() {
        return (
            startTime = () => {
                const today = new Date();
                let hour = today.getHours();
                let minute = today.getMinutes();
                let second = today.getSeconds();
                minute = checkTime(minute);
                second = checkTime(second);
                document.getElementById("clock").innerHTML =
                hour + ":" + minute + ":" + second;
                setTimeout(startTime, 1000);
            },
            checkTime = (i) => {
                if (i < 10) {
                i = "0" + i;
                }
                return i;
            }    
        )    
    }

}
