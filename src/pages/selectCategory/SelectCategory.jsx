import React, { useEffect, useState } from 'react'
import './SelectCategory.css'

import errorSign from "../../assets/images/warning-sign.svg"

import CategoryCard from '../../components/category-card/CategoryCard'

import { useNavigate } from 'react-router-dom'

import { data } from '../../assets/dataset/categoryData'

function SelectCategory() {

    // To redirect to next page
    const navigate = useNavigate()

    // State for storing categories and their selection status
    const [defaultCategory, setDefaultCategory] = useState(data)

    // To maintain error status
    const [error, setError] = useState(false)

    // General function for changing selection status of individual category
    const changeState = (category, isSelected) => {
        let newState = defaultCategory.map(item => {
            if (item.value === category) {
                return {
                    ...item, isSelected: isSelected
                }
            }
            return item
        })
        setDefaultCategory(newState)
    }

    // For changing selection status to false
    const removeCategory = (e) => {
        const category = e.target.id
        changeState(category, false)
    }

    // For storing selected categories list
    // const selectedCategory = defaultCategory.filter(category => category.isSelected).map(category => category.value)
    // OR:
    const [selectedCategory, setSelectedCategory] = useState([])
    useEffect(() => {
        const newcat = defaultCategory.filter(category => category.isSelected).map(category => category.value)
        setSelectedCategory(newcat)
    }, [defaultCategory])
    
    // For storing selected categories list in local storage and redirect to next page
    const handleNextPage = () => {
        if (selectedCategory.length > 2) {
            console.log(selectedCategory)
            localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory))
            navigate('/')
        }
        else {
            setError(true)
        }
    }

    return (
        <div className='SelectCategory'>
            <div className='left-side'>
                <h1 className='app-name'>Super app</h1>
                <h1 className='caption'>Choose your entertainment category</h1>
                <div className='selected-category-list'>
                    {
                        selectedCategory.map(category =>
                            <div key={category} className='selected-category'>
                                {category}
                                <div className='deselect-button' id={category} onClick={removeCategory} >X</div>
                            </div>
                        )
                    }
                </div>
                {
                    error &&
                    selectedCategory.length < 3 &&
                    <p className='minimum-error'>
                        <img src={errorSign} alt='error sign' />
                        Minimum 3 category required
                    </p>
                }
            </div>

            <div className='right-side'>
                <div className='category-list'>
                    {
                        defaultCategory.map(category =>
                            <CategoryCard key={category.value} {...category} selectCategory={changeState} />
                        )
                    }
                </div>
                <button className='next-page-button' onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    )
}

export default SelectCategory