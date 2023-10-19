import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.css'

import ProfileCard from '../../components/profile-card/ProfileCard'
import WeatherCard from '../../components/weather-card/WeatherCard'
import NewsCard from '../../components/news-card/NewsCard'
import Notes from '../../components/notes/Notes'
import Timer from '../../components/timer/Timer'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const [userSignedUp, setUserSignedUp] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            if(localStorage.getItem('selectedCategory')){
                setUserSignedUp(true)
            }
            else{
                navigate('/select-category')
            }
        }
        else{
            setUserSignedUp(false)
            navigate('/register')
        }
    }, [])

    const navigate = useNavigate()
    const handleBrowse = () => {
        navigate('/entertainment')
    }

    if (userSignedUp) {
        return (
            <div className={styles.HomePage}>
                <div className={styles.leftSide}>
                    <div className={styles.leftUpper}>
                        <div className={styles.profileWeatherContainer}>
                            <ProfileCard />
                            <WeatherCard />
                        </div>
                        <div className={styles.notesContainer}>
                            <Notes />
                        </div>
                    </div>
                    <div className={styles.timerContainer}>
                        <Timer />
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <NewsCard />
                </div>
                <button className={styles.browseButton} onClick={handleBrowse}>Browse</button>
            </div>
        )
    }
}

export default HomePage