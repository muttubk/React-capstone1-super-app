import React from 'react'
import './ProfileCard.css'

import profilePhoto from '../../assets/images/profilePhoto.png'

function ProfileCard() {
    const userDetails = JSON.parse(localStorage.getItem('userData'))
    const selectedCategory = JSON.parse(localStorage.getItem('selectedCategory'))
    return (
        <div className='user-profile-card'>
            <div className="profile-left">
                <img id='profile-picture' src={profilePhoto} alt="" />
            </div>
            <div className="profile-right">
                <div className="user-details">
                    <p className='name'>{userDetails.name}</p>
                    <p className='email'>{userDetails.email}</p>
                    <p className='userName'>{userDetails.userName}</p>
                </div>
                <div className="selected-categories">
                    {selectedCategory.map(category => {
                        return <div className='category' key={category}>
                            {category}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard