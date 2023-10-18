import React, { useState, useEffect } from 'react'
import './NewsCard.css'

import newsBackground from '../../assets/images/newsBackground.png'

function NewsCard() {

    // For storing news data
    const [newsData, setNewsData] = useState();

    // For storing time
    const [time, setTime] = useState()
    // fetching random news data from news API
    useEffect(() => {
        const random = parseInt(10 * Math.random())
        fetch("https://newsdata.io/api/1/news?apikey=pub_31354efb07134e9c90fe0d1e2feb30d570d58&q=pizza")
            .then(response => response.json())
            .then(data => {
                setNewsData(data.results[random]);
                console.log(data.results[random])
            })
        const timer = setInterval(() => setTime(new Date()))

        return () => {
            clearInterval(timer)
        }
    }, [])
    
    return (
        <>
            {
                newsData ?
                    <div className='NewsCard'>
                        <div className='news-background-image'>
                            <img src={newsData.image_url ?
                                newsData.image_url :
                                newsBackground} alt=''
                            />
                            <div className='news-info'>
                                <h2 className='title'>{newsData.title}</h2>
                                <p className='time'>
                                    {time.toLocaleDateString().replaceAll('/', '-')}
                                    {' | '}
                                    {(time.getHours() % 12) < 10 ? '0' + (time.getHours() % 12) : (time.getHours() % 12)}
                                    :
                                    {time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}
                                    {' ' + (time.getHours() < 12 ? 'AM' : 'PM')}
                                </p>
                            </div>
                        </div>
                        <div className='news-content'>
                            <p>
                                {newsData.content}
                            </p>
                        </div>
                    </div> :
                    <div className='loading'>Loading...</div>
            }
        </>
    )
}

export default NewsCard