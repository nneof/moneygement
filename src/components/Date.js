import React from 'react'
import '../styling/Date.css';

function Date() {
    return (
        <div className='expense-date'>
            <div className="expense-date-month">month</div>
            <div className="expense-date-year">year</div>
            <div className="expense-date-day">day</div>
        </div>
    )
}

export default Date
