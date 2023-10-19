import React from 'react'
import styles from './ProfileCard.module.css'

import profilePhoto from '../../assets/images/profilePhoto.png'

function ProfileCard() {
    const userDetails = JSON.parse(localStorage.getItem('userData'))
    const selectedCategory = JSON.parse(localStorage.getItem('selectedCategory'))
    return (
        <div className={styles.userProfileCard}>
            <div className={styles.profileLeft}>
                <img id={styles.profilePicture} src={profilePhoto} alt="" />
            </div>
            <div className={styles.profileRight}>
                <div className={styles.userDetails}>
                    <p className={styles.name}>{userDetails.name}</p>
                    <p className={styles.email}>{userDetails.email}</p>
                    <p className={styles.userName}>{userDetails.userName}</p>
                </div>
                <div className={styles.selectedCategories}>
                    {selectedCategory.map(category => {
                        return <div className={styles.category} key={category}>
                            {category}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard