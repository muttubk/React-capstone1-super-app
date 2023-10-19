import React, { useEffect, useState } from 'react'
import styles from './SelectCategory.module.css'

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
        <div className={styles.SelectCategory}>
            <div className={styles.leftSide}>
                <h1 className={styles.appName}>Super app</h1>
                <h1 className={styles.caption}>Choose your entertainment category</h1>
                <div className={styles.selectedCategoryList}>
                    {
                        selectedCategory.map(category =>
                            <div key={category} className={styles.selectedCategory}>
                                {category}
                                <div className={styles.deselectButton} id={category} onClick={removeCategory} >X</div>
                            </div>
                        )
                    }
                </div>
                {
                    error &&
                    selectedCategory.length < 3 &&
                    <p className={styles.minimumError}>
                        <img src={errorSign} alt='error sign' />
                        Minimum 3 category required
                    </p>
                }
            </div>

            <div className={styles.rightSide}>
                <div className={styles.categoryList}>
                    {
                        defaultCategory.map(category =>
                            <CategoryCard key={category.value} {...category} selectCategory={changeState} />
                        )
                    }
                </div>
                <button className={styles.nextPageButton} onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    )
}

export default SelectCategory