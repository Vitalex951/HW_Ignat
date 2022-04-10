import React from 'react'
import Clock from './Clock'
import s from './HW9.module.css'
import {Clock_v1} from "./Clock_v1";

function HW9() {
    return (
        <div>
            {/*<div className='containerheader'>*/}
            {/*    <h1>*/}
            {/*        Homeworks 9*/}
            {/*    </h1>*/}
            {/*</div>*/}
            <div className={s.main}>
                <div className={s.container}>
                    <Clock/>
                </div>
            </div>
        </div>
    )
}

export default HW9
