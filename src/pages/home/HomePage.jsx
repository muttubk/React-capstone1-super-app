import React from 'react'
import './HomePage.css'

import ProfileCard from '../../components/profile-card/ProfileCard'
import WeatherCard from '../../components/weather-card/WeatherCard'
import NewsCard from '../../components/news-card/NewsCard'
import Notes from '../../components/notes/Notes'
import Timer from '../../components/timer/Timer'

function HomePage() {

    return (
        <div className='HomePage'>
            <div className='left-side'>
                <div className='left-upper'>
                    <div className='profile-weather-container'>
                        <ProfileCard />
                        <WeatherCard />
                    </div>
                    <div className='notes-container'>
                        <Notes/>
                    </div>
                </div>
                <div className='timer-container'>
                    <Timer/>
                </div>
            </div>
            <div className='right-side'>
                <NewsCard />
            </div>
        </div>
    )
}

export default HomePage