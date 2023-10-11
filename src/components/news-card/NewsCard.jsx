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
        const random = parseInt(20 * Math.random())
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=b7d6777421d0486f8cde9795074ca017")
            .then(response => response.json())
            .then(data => {
                setNewsData(data.articles[random]);
                // console.log(data.articles)
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
                            <img src={newsData.urlToImage ?
                                newsData.urlToImage :
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