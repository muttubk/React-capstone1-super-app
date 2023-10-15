import React, { useState, useEffect } from 'react'
import styles from './MoviesList.module.css'

function MoviesList(props) {

    const [data, setData] = useState()

    const id = {
        Action: 28,
        Drama: 18,
        Romance: 10749,
        Thriller: 53,
        Western: 37,
        Horror: 27,
        Fantasy: 14,
        Music: 10402,
        Fiction: 878
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmY4ZDQxYmU5MTEwNTQ2NzQ5ZWM0NzMxNTFiMzczYyIsInN1YiI6IjY1MjdkODYxMWYzZTYwMDEzOTlkMDQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jeoaP4B30WceVTgKnLosbsMQmeZ8AZpoNr4MjMqhPQ4'
            }
        };

        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id[props.category]}`, options)
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                setData(response.results.slice(0, 4))
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <p className={styles.categoryName}>{props.category}</p>
            <div className={styles.group}>
                {
                    data && data.map(item => {
                        return (
                            <div key={item.id} className={styles.movieCard}>
                                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MoviesList