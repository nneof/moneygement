import React from 'react'
import ExpenseDate from './ExpenseDate'
import '../styling/Expense.css'

function expense(props) {
    return (
        <div className="expense">
            <ExpenseDate className="expense-date" date={props.date}/>
            <div className='expense-type'>
                Type:
                <p className="expense-type-container">
                    {props.type}
                </p>
            </div>
            <div className="expense-description">
                Description:
                <p className="expense-description-text">
                    {props.description}
                </p>
            </div>
            <div className="expense-price">€{props.price}</div>
        </div>
    )
}

export default expense


