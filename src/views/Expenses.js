import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar';
import Expense from '../components/Expense';
import NewExpense from '../components/NewExpense';

const expensesList = [
    // { type: 'food', description: 'lunch from kfc because i was bored to cook :) ', price: '99999.99', date: new Date(2021, 11, 31) }
];

function Expenses() {

    const [expenses, setExpenses] = useState(expensesList);
    var uniqueId = 0;

    const addExpenseHandler = expense => {
        setExpenses(prevState => {
            return [expense, ...prevState];
        });
    }

    return (
        <div>
            <NavigationBar />
            <NewExpense onAddExpense={addExpenseHandler} />
            {expenses.map(expense =>
                <Expense
                    key={uniqueId++}
                    date={expense.date}
                    type={expense.type}
                    description={expense.description}
                    price={expense.price}
                />)
            }
        </div>
    )
}

export default Expenses
