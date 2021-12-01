import React from 'react'
import Date from './Date'
import './Expense.css'

function expense() {
    return (
        <div className="expense">
            <Date />
            <div classname="expense-category"> Category: </div>
            <div classname="expense-comment"> Comments: </div>
            <div classname="expense-price"> Price: </div>
        </div>
    )
}

export default expense


