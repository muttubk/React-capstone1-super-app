import React, { useState } from 'react'
import styles from './Timer.module.css'

import upImage from '../../assets/images/up.svg'
import downImage from '../../assets/images/down.svg'

import CountDownCircle from '../countdown/CountDownCircle'

function Timer() {
    // States for each second, minute, hour and total time
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [totalTime, setTotalTime] = useState(0)

    // For maintaining countdown timer status
    const [started, setStarted] = useState(false)

    // For handling user input
    const handleSeconds = (action) => {
        if (action === 'increase' && seconds < 60) {
            setSeconds(seconds + 1)
        } else if (action === 'decrease' && seconds > 0) {
            setSeconds(seconds - 1)
        }
    }

    const handleMinutes = (action) => {
        if (action === 'increase' && minutes < 60) {
            setMinutes(minutes + 1)
        } else if (action === 'decrease' && minutes > 0) {
            setMinutes(minutes - 1)
        }
    }

    const handleHours = (action) => {
        if (action === 'increase' && hours < 99) {
            setHours(hours + 1)
        } else if (action === 'decrease' && hours > 0) {
            setHours(hours - 1)
        }
    }

    // For handling start and stop of countdown timer
    const handleStart = () => {
        if (started) {
            handleReset()
        }
        else {
            const total = seconds + minutes * 60 + hours * 3600
            if (total !== 0) {
                setTotalTime(total)
                setStarted(true)
                setSeconds(0)
                setMinutes(0)
                setHours(0)
            }
        }
    }

    // For resetting the countdown timer
    const handleReset = () => {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setTotalTime(0)
        setStarted(false)
    }

    return (
        <div className={styles.Timer}>
            <div className={styles.left}>
                <CountDownCircle totalTime={started ? totalTime : 0} handleReset={handleReset} />
            </div>
            <div className={styles.right}>
                <div className={styles.setTimerContainer}>
                    <div className={styles.hours}>
                        <p className={styles.text}>Hours</p>
                        <img src={upImage} alt='' className={styles.controlButton} onClick={() => handleHours('increase')} />
                        <p>{hours < 10 ? ('0' + hours) : hours}</p>
                        <img src={downImage} alt="" className={styles.controlButton} onClick={() => handleHours('decrease')} />
                    </div>
                    <p className={styles.colon}>:</p>
                    <div className={styles.minutes}>
                        <p className={styles.text}>Minutes</p>
                        <img src={upImage} alt='' className={styles.controlButton} onClick={() => handleMinutes('increase')} />
                        <p>{minutes < 10 ? ('0' + minutes) : minutes}</p>
                        <img src={downImage} alt="" className={styles.controlButton} onClick={() => handleMinutes('decrease')} />
                    </div>
                    <p className={styles.colon}>:</p>
                    <div className={styles.seconds}>
                        <p className={styles.text}>Seconds</p>
                        <img src={upImage} alt='' className={styles.controlButton} onClick={() => handleSeconds('increase')} />
                        <p>{seconds < 10 ? ('0' + seconds) : seconds}</p>
                        <img src={downImage} alt="" className={styles.controlButton} onClick={() => handleSeconds('decrease')} />
                    </div>
                </div>
                <button className={styles.timerButton} onClick={handleStart}>{started ? 'Stop' : 'Start'}</button>
            </div>
        </div>
    )
}

export default Timer