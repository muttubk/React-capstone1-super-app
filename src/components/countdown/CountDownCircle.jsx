import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./CountDownCircle.css";

import alarmRingtone from '../../assets/audio/alarm-ringtone.mp3'

// For storing props values of CountdownCircleTimer component
const timerProps = {
    isPlaying: true,
    size: 140,
    strokeWidth: 5,
    colors: "#FF6A6A",
    trailColor: '#181D37',
    rotation: 'counterclockwise',
    isGrowing: true,
};

// For Displaying time in hh:mm:ss format
const renderTime = (remainingTime) => {
    let hours = Math.floor(remainingTime / 3600)
    let minutes = Math.floor((remainingTime % 3600) / 60)
    let seconds = remainingTime % 60
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    return `${hours}:${minutes}:${seconds}`
}

export default function CountDownCircle(props) {
    // For creating new audio object, which is played after timer completion
    const audio = new Audio(alarmRingtone)

    return (
        <div className="CountDownCircle">
            <CountdownCircleTimer
                {...timerProps}
                key={props.totalTime}
                duration={props.totalTime}
                onComplete={() => {
                    audio.play();
                    props.handleReset()
                }}
            >
                {({ remainingTime }) => (
                    <span className="remaining-time">
                        {renderTime(remainingTime)}
                    </span>
                )}
            </CountdownCircleTimer>
        </div>
    );
}
