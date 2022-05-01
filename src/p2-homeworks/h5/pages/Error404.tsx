import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.content}>Oops!
                    <p className={s.errorText}>We can't seem to find the page you're looking for</p>
                </div>
                <img
                    src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"/>
            </div>
        </div>
    )
}

export default Error404
