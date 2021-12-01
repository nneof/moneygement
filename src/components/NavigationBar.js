import React from 'react'
import { NavLink } from 'react-router-dom';
import style from '../styling/NavigationBar.module.css';

function NavigationBar() {
    return (
        <header className={style.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={style.active} to='/homepage'>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to='/expenses'>Expenses</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to='/shopping_list'>Shopping list</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to='/notes'>Take a note</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to='/settings'>Settings</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to='/login'>Logout</NavLink>
                    </li>   
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar
