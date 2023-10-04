import React from 'react'
import './CategoryCard.css'

function CategoryCard(props) {
    // For changing border on selection
    const border = props.isSelected ? '6px solid rgba(17, 184, 0, 1)' : 'none'
    
    // For changing selection status to true
    const handleClick = () => {
        props.selectCategory(props.value, true)
    }
    return (
        <div className='CategoryCard'
            style={{ background: props.background, border: border }}
            onClick={handleClick}
        >
            <h1 className='category-label'>{props.label}</h1>
            <div className='category-image'>
                <img src={props.image} alt='' />
            </div>
        </div>
    )
}

export default CategoryCard