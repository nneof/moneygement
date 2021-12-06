import React from 'react'
import NavigationBar from '../components/NavigationBar';
import '../styling/Homepage.css'

function Homepage() {
    return (
        <div>
            <NavigationBar />
            <div className='homepage'>
                <div className='homepage-expense'>View my expenses</div>
                <div className='homepage-shopping-list'>View my shopping list</div>
                <div className='homepage-notes'>View my notes</div>
                <div className='homepage-future-analysis'>View future analysis</div>
            </div>
        </div>
    )
}

export default Homepage;

