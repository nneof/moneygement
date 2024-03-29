import React from 'react'
import { NavLink } from 'react-router-dom';
import style from '../styling/NavigationBar.module.css';
import logo from '../logo.svg'

function NavigationBar() {
    return (
        <>
            <a href="./homepage">
                <img className={style['nav-bar-logo']} src={logo} alt={"logo"} />
            </a>
            <header className={style.header}>
                <nav>
                    <ul>
                        <li>
                            <NavLink activeclassname={style.active} to='/homepage'>Homepage</NavLink>
                        </li>
                        <li>
                            <NavLink activeclassname={style.active} to='/expenses'>Expenses</NavLink>
                        </li>
                        <li>
                            <NavLink activeclassname={style.active} to='/shopping_list'>Shopping list</NavLink>
                        </li>
                        <li>
                            <NavLink activeclassname={style.active} to='/notes'>Take a note</NavLink>
                        </li>
                        <li>
                            <NavLink activeclassname={style.active} to='/settings'>Settings</NavLink>
                        </li>
                        <li>
                            <NavLink activeclassname={style.active} to='/login'>Logout</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavigationBar
