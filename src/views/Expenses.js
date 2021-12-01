import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Expense from '../components/Expense';

function Expenses() {
    return (
        <div>
            <NavigationBar />
            <br/><br/><br/><br/><br/><br/><br/>
            <Expense />
            <Expense />
            <Expense />
        </div>
    )
}

export default Expenses
