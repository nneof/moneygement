import React from 'react'
import Date from './Date'
import '../styling/Expense.css'

function expense() {
    return (
        <div className="expense">
            <Date />
            <div className="expense-all">
                <div className='expense-category'>Category: Others</div>
                <div className="expense-comment">Comment: New fridge</div>
                <div className="expense-price">$218.95</div>
            </div>
        </div>
    )
}

export default expense


