import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import s from './Header.module.css';
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

function HW5() {

    const theme = useSelector<AppStoreType, string>(state => state.theme)
    console.log("theme", theme)
    return (
        <div className={s[theme]}>
            <div>
            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
            </div>
        </div>
    )
}

export default HW5
