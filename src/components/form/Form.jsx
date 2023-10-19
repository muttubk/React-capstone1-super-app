import React, { useState } from 'react'
import styles from './Form.module.css'
// Hook to redirect to another page
import { useNavigate } from 'react-router-dom';

function Form() {
    // Hook to redircet to another page
    const navigate = useNavigate();

    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        mobile: '',
        dataPermission: false
    });

    // State for storing error messages
    const [errors, setErrors] = useState({})

    // To identify valid input data type
    const validInputType = {
        name: /^[a-zA-Z\s]*$/,
        userName: /^[\w\d]*$/,
        email: /^([a-zA-Z0-9._%-]*@?[a-zA-Z0-9.-]*\.?[a-zA-Z]*)$/,
        mobile: /^[0-9]{0,10}$/
    }

    // Input change handler
    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        const pattern = validInputType[name]
        if (target.type === 'checkbox') {
            setFormData({
                ...formData, [name]: value
            })
            setErrors({
                ...errors, [name]: ''
            })
        }
        else if (pattern.test(value)) {
            setFormData({
                ...formData, [name]: value
            })
            setErrors({
                ...errors, [name]: ''
            })
        } else {
            setErrors({
                ...errors, [name]: 'Invalid input type detected'
            })
        }
    }

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        validateData();
        let dataKeys = Object.keys(formData)
        let isValid = dataKeys.every(data => errors[data] === '')
        if (isValid) {
            console.log(formData)
            localStorage.setItem("userData", JSON.stringify(formData))
            // To redirect to catogory page on successful Sign Up
            navigate('/select-category')
        } else {
            console.log(errors)
        }
    }

    // Object for storing validating functions for each field
    const validate = {
        name: (() => {
            if (formData.name.length === 0) {
                return 'Field is required'
            } else if (formData.name.length < 3) {
                return 'Minmum length required is 3'
            } else {
                return ''
            }
        })(),
        userName: (() => {
            if (formData.userName.length === 0) {
                return 'Field is reqiured'
            } else if (formData.userName.length < 3) {
                return 'Minimum length required is 3'
            } else {
                return ''
            }
        })(),
        email: (() => {
            if (formData.email.length === 0) {
                return 'Field is required'
            } else if (!(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formData.email))) {
                return 'Enter valid email address'
            } else {
                return ''
            }
        })(),
        mobile: (() => {
            if (formData.mobile.length === 0) {
                return 'Field is required'
            } else if (formData.mobile.length < 10) {
                return 'Enter valid 10 digits number'
            } else {
                return ''
            }
        })(),
        dataPermission: (() => {
            if (formData.dataPermission === false) {
                return 'Check this box if you want to proceed'
            } else {
                return ''
            }
        })()
    }

    // To validate every data
    const validateData = () => {
        let newErrors = {}
        let dataKeys = Object.keys(formData)
        dataKeys.forEach(data => {
            newErrors[data] = validate[data]
        })
        setErrors(newErrors)
    }

    // For real-time validation of corresponding field
    const handleBlur = (e) => {
        const { name } = e.target
        setErrors({
            ...errors, [name]: validate[name]
        })
    }

    //TODO: This will redirect to category page if user already Signed Up
    // useEffect(()=>{
    //     if(localStorage.getItem("userData")){
    //         navigate('/category')
    //     }
    // })

    return (
        <div className={styles.Form}>
            <div className={styles.formHeading}>
                <h1>Super app</h1>
                <p>Create your new account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder='Name'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ border: (errors.name) ? '1px solid red' : '' }}
                    />
                    {
                        <p className={styles.errorMessage}>{errors.name}</p>
                    }
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='UserName'
                        id='userName'
                        name='userName'
                        value={formData.userName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ border: (errors.userName) ? '1px solid red' : '' }}
                    />
                    {
                        <p className={styles.errorMessage}>{errors.userName}</p>
                    }
                </div>
                <div>
                    <input
                        placeholder='Email'
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ border: (errors.email) ? '1px solid red' : '' }}
                    />
                    {
                        <p className={styles.errorMessage}>{errors.email}</p>
                    }
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Mobile'
                        id='mobile'
                        name='mobile'
                        value={formData.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ border: (errors.mobile) ? '1px solid red' : '' }}
                    />
                    {
                        <p className={styles.errorMessage}>{errors.mobile}</p>
                    }
                </div>
                <div className={styles.dataPermissionBlock}>
                    <div className={styles.dataPermission}>
                        <input
                            type="checkbox"
                            id="dataPermission"
                            name='dataPermission'
                            value={formData.dataPermission}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor='dataPermission' >
                            Share my registration data with Superapp
                        </label>
                    </div>
                    {
                        <p className={styles.errorMessage}>{errors.dataPermission}</p>
                    }
                </div>
                <button id={styles.signUp} type='submit'>SIGN UP</button>
            </form>
            <div className={styles.termsAndPolicy}>
                <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default Form