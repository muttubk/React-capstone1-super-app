import React, { useState, useEffect } from 'react'
import './NewsCard.css'

import newsBackground from '../../assets/images/newsBackground.png'

function NewsCard() {

    const [newsData, setNewsData] = useState();
    const [time, setTime] = useState()
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=b7d6777421d0486f8cde9795074ca017")
            .then(response => response.json())
            .then(data => {
                setNewsData(data);
                // console.log(data)
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
                            <img src={newsData.articles[0].urlToImage ?
                                newsData.articles[0].urlToImage :
                                newsBackground} alt=''
                            />
                            <div className='news-info'>
                                <h2 className='title'>{newsData.articles[0].title}</h2>
                                <p className='time'>
                                    {(time.toLocaleDateString()).replaceAll('/', '-')} | 
                                    {time.toLocaleTimeString().slice(0,5)+time.toLocaleTimeString().slice(8)}
                                </p>
                            </div>
                        </div>
                        <div className='news-content'>
                            <p>
                                {newsData.articles[0].content}
                            </p>
                        </div>
                    </div> :
                    <div className='loading'>Loading...</div>
            }
        </>
    )
}

export default NewsCard