import React, { useEffect, useState } from 'react'
import './HomePage.css'

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
            <div className='HomePage'>
                <div className='left-side'>
                    <div className='left-upper'>
                        <div className='profile-weather-container'>
                            <ProfileCard />
                            <WeatherCard />
                        </div>
                        <div className='notes-container'>
                            <Notes />
                        </div>
                    </div>
                    <div className='timer-container'>
                        <Timer />
                    </div>
                </div>
                <div className='right-side'>
                    <NewsCard />
                </div>
                <button className='browse-button' onClick={handleBrowse}>Browse</button>
            </div>
        )
    }
}

export default HomePage