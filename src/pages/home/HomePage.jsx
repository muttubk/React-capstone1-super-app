import React from 'react'
import './HomePage.css'

import ProfileCard from '../../components/profile-card/ProfileCard'
import WeatherCard from '../../components/weather-card/WeatherCard'
import NewsCard from '../../components/news-card/NewsCard'

function HomePage() {

    return (
        <div className='HomePage'>
            <div className='left-side'>
                <ProfileCard/>
                <WeatherCard/>
            </div>
            <div className='right-side'>
                <NewsCard />
            </div>
        </div>
    )
}

export default HomePage