import React from 'react'
import './HomePage.css'

function HomePage() {

    const selectedCategory = JSON.parse(localStorage.getItem('selectedCategory'))
    return (
        <div className='HomePage'>
            <h1>This is Home Page</h1>
            {
                selectedCategory.map(category=><h2 key={category}>{category}</h2>)
            }
        </div>
    )
}

export default HomePage