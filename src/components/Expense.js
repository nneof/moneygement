import React from 'react'
import Date from './Date'
import '../styling/Expense.css'

function expense() {
    return (
        <div className="expense">
            <Date className="expense-date"/>
            <div className='expense-type'>Type: Others</div>
            <div className="expense-description">Description: New fridge</div>
            <div className="expense-price">$218.95</div>
        </div>
    )
}

export default expense


