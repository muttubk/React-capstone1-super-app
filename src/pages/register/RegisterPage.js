import React from 'react'
import styles from './RegisterPage.module.css'

import image from '../../assets/images/image 13.png'

import Form from '../../components/form/Form'

function Register() {
    return (
        <div className={styles.RegisterPage}>
            <div className={styles.leftSide}>
                <img className={styles.registerPageImage} src={image} alt='' />
                <h1>Discover new things on Superapp</h1>
            </div>
            <div className='right-side'>
                <Form/>
            </div>
        </div>
    )
}

export default Register