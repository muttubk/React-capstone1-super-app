import React from 'react'
import styles from './EntertainmentPage.module.css'

import profileLogo from '../../assets/images/profileLogo.png'

import MoviesList from '../../components/movies-list/MoviesList'

import { useNavigate } from 'react-router-dom'

function EntertainmentPage() {

    const navigate = useNavigate()

    const selectedCategories = JSON.parse(localStorage.getItem('selectedCategory'))

    return (
        <div className={styles.EntertainmentPage}>
            <div className={styles.header}>
                <h1 className={styles.name}>Super app</h1>
                <div>
                    <img src={profileLogo} alt="" className={styles.profileLogo} onClick={() => navigate('/')} />
                </div>
            </div>
            <div className={styles.list}>
                <h1>Entertainment according to your choice</h1>
                {
                    selectedCategories.map(category => {
                        return (
                            <MoviesList category={category} key={category} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EntertainmentPage