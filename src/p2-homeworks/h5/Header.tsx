import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css';

function Header() {
    return (

        <div className={s.dropdown}>
            <button className={s.dropbtns}>Dropdown</button>
            <div className={s.content}>
                <NavLink className={s.navlink} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
                <NavLink className={s.navlink} to={PATH.JUNIOR}> JUNIOR</NavLink>
                <NavLink className={s.navlink} to={PATH.JUNIOR_PlUS}> JUNIOR_PLUS</NavLink>
            </div>
        </div>
    )
}

export default Header
