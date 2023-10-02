import React, { useState } from 'react'
import './Form.css'
//TODO: Hook to redirect to another page
// import { useNavigate } from 'react-router-dom';

function Form() {
    //TODO: Hook to redircet to another page
    // const navigate = useNavigate();

    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        mobile: '',
        dataPermission: false
    });

    // State for whether all fileds are filled or not
    const [reqStatus, setReqStatus] = useState(false)

    // Input change handler
    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        setFormData({
            ...formData, [name]: value
        })
    }

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        let dataKeys = Object.keys(formData)
        let required = (dataKeys.some(data=>formData[data].length===0)) 
                        || !(formData.dataPermission)
        required? setReqStatus(true) : setReqStatus(false)
        if(!required){
            // console.log(formData)
            // Can also pass formData.userName as key to store multiple users data
            localStorage.setItem("userData", JSON.stringify(formData))
            //TODO: To redirect to catogory page on successful Sign Up
            // navigate('/category')
        }
    }

    //TODO: This will redirect to category page if user already Signed Up
    // useEffect(()=>{
    //     if(localStorage.getItem("userData")){
    //         navigate('/category')
    //     }
    // })

    return (
        <div className='Form'>
            <div className='form-heading'>
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
                        style={{border: (reqStatus && formData.name.length===0)? '1px solid red': 'none'}}
                    />
                    {
                        reqStatus &&
                        formData.name.length === 0 &&
                        <p className='error-message'>
                            Field is required
                        </p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='UserName'
                        id='userName'
                        name='userName'
                        value={formData.userName}
                        onChange={handleChange}
                        style={{border: (reqStatus && formData.userName.length===0)? '1px solid red': 'none'}}
                    />
                    {
                        reqStatus &&
                        formData.userName.length === 0 &&
                        <p className='error-message'>
                            Field is required
                        </p>}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder='Email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        style={{border: (reqStatus && formData.email.length===0)? '1px solid red': 'none'}}
                    />
                    {
                        reqStatus &&
                        formData.email.length === 0 &&
                        <p className='error-message'>
                            Field is required
                        </p>}
                </div>
                <div>
                    <input
                        type="number"
                        placeholder='Mobile'
                        id='mobile'
                        name='mobile'
                        value={formData.mobile}
                        onChange={handleChange}
                        style={{border: (reqStatus && formData.mobile.length===0)? '1px solid red': 'none'}}
                    />
                    {
                        reqStatus &&
                        formData.mobile.length === 0 &&
                        <p className='error-message'>
                            Field is required
                        </p>}
                </div>
                <div className='dataPermission-block'>
                    <div className='dataPermission'>
                        <input
                            type="checkbox"
                            id="dataPermission"
                            name='dataPermission'
                            value={formData.dataPermission}
                            onChange={handleChange}
                        />
                        <label htmlFor='dataPermission' >
                            Share my registration data with Superapp
                        </label>
                    </div>
                    {
                        reqStatus &&
                        formData.dataPermission === false &&
                        <p className='error-message'>
                            Check this box if you want to proceed
                        </p>}
                </div>
                <button id='signUp' type='submit'>SIGN UP</button>
            </form>
            <div className='terms-and-policy'>
                <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default Form