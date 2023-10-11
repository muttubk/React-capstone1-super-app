import React, { useEffect, useState } from 'react'

import styles from './WeatherCard.module.css'

import pressureIcon from '../../assets/images/Vector (1).svg'
import windIcon from '../../assets/images/Vector (2).svg'
import humidityIcon from '../../assets/images/Group.svg'

function WeatherCard() {

    // For stroing weather data
    const [weatherData, setWeatherData] = useState()

    // Function for weather API call
    const fetchData = () => {
        fetch("http://api.weatherapi.com/v1/current.json?key=ce8139316cbe49de9a370939230710&q=Mudhol&aqi=no")
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setWeatherData(data);
                return data;
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // For storing time
    const [time, setTime] = useState(new Date())

    // Fetching weather data from weather API
    useEffect(() => {
        fetchData()
        const timer = setInterval(() => { setTime(new Date()); fetchData() }, 60000)
        return function cleanup() {
            clearInterval(timer)
        }
    }, [])


    return (
        <div className={styles.WeatherCard}>
            <div className={styles.dateAndTime_container}>
                <div className={styles.date}>
                    {time.toLocaleDateString().replaceAll('/', '-')}
                </div>
                <div className={styles.time}>
                    {(time.getHours() % 12) < 10 ? '0' + (time.getHours() % 12) : (time.getHours() % 12)}
                    :
                    {time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}
                    {' ' + (time.getHours() < 12 ? 'AM' : 'PM')}
                </div>
            </div>
            <div className={styles.weather}>
                <div className={styles.left}>
                    <img src={weatherData && weatherData.current.condition.icon} className={styles.conditionIcon} alt='' />
                    <p className={styles.condition}>
                        {weatherData && weatherData.current.condition.text}
                    </p>
                </div>
                <hr />
                <div className={styles.middle}>
                    <p className={styles.temperature}>
                        {weatherData && weatherData.current.temp_c}°C
                    </p>
                    <div className={styles.pressure}>
                        <img src={pressureIcon} className={styles.pressureIcon} alt='' />
                        <p>{weatherData && weatherData.current.pressure_mb} mbar <br /> Pressure</p>
                    </div>
                </div>
                <hr />
                <div className={styles.last}>
                    <div className={styles.windspeed}>
                        <img src={windIcon} className={styles.windIcon} alt="" />
                        <p>{weatherData && weatherData.current.wind_kph} km/h <br /> Wind</p>
                    </div>
                    <div className={styles.humidity}>
                        <img src={humidityIcon} className={styles.humidityIcon} alt='' />
                        <p>{weatherData && weatherData.current.humidity}% <br /> Humidity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard