import React, { useEffect, useState } from 'react'

import styles from './WeatherCard.module.css'

import pressureIcon from '../../assets/images/Vector (1).svg'
import windIcon from '../../assets/images/Vector (2).svg'
import humidityIcon from '../../assets/images/Group.svg'

function WeatherCard() {

    const [weatherData, setWeatherData] = useState()
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
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        
        const timer = setInterval(()=> {setTime(new Date()); fetchData()}, 1000)
        return function cleanup(){
                clearInterval(timer)
            }
    }, [])


    return (
        <div className={styles.WeatherCard}>
            <div className={styles.dateAndTime_container}>
                <div className={styles.date}>
                    {(time.toLocaleDateString()).replaceAll('/', '-')}
                </div>
                <div className={styles.time}>
                    {time.toLocaleTimeString().slice(0,5)+time.toLocaleTimeString().slice(8)}
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