import React from 'react'
import './RegisterPage.css'

import image from '../../assets/images/image 13.png'

import Form from '../../components/form/Form'

function Register() {
    return (
        <div className='Register-page'>
            <div className='left-side'>
                <img className='register-page-image' src={image} alt='' />
                <h1>Discover new things on Superapp</h1>
            </div>
            <div className='right-side'>
                <Form/>
            </div>
        </div>
    )
}

export default Register