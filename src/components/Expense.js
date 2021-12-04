import React from 'react'
import Date from './Date'
import '../styling/Expense.css'

function expense() {
    return (
        <div className="expense">
            <Date className="expense-date" />
            <div className='expense-type'>
                Type:
                <p className="expense-type-container">
                    Katigoria
                </p>
            </div>
            <div className="expense-description">
                Description:
                <p className="expense-description-text">
                    This text area containts the description of the item
                </p>
            </div>
            <div className="expense-price">$218.95</div>
        </div>
    )
}

export default expense


