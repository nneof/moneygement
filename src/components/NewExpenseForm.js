import React, { useState } from 'react'
import '../styling/NewExpenseForm.css'

function NewExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        enteredType: '',
        enteredDescription: '',
        enteredPrice: '',
        enteredDate: ''
    });

    const typeChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredType: event.target.value }
        })
    }

    const descriptionChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDescription: event.target.value }
        })
    }

    const priceChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredPrice: event.target.value }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            type: userInput.enteredType,
            description: userInput.enteredDescription,
            price: userInput.enteredPrice,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput({
            enteredType: '',
            enteredDescription: '',
            enteredPrice: '',
            enteredDate: ''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense-controls'>
                <div className='new-expense-control'>
                    <label>Type:</label>
                    <input type="text" onChange={typeChangeHandler} value={userInput.enteredType} />
                </div>
                <div className='new-expense-control'>
                    <label>Description:</label>
                    <input type="text" onChange={descriptionChangeHandler} value={userInput.enteredDescription} />
                </div>
                <div className='new-expense-control'>
                    <label>Price:</label>
                    <input type="number" onChange={priceChangeHandler} value={userInput.enteredPrice} />
                </div>
                <div className="new-expense-control">
                    <label>Date:</label>
                    <input type="date" min="2021-01-01" onChange={dateChangeHandler} value={userInput.enteredDate} />
                </div>
            </div>
            <div className="new-expense-actions">
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm
