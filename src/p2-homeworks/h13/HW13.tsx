import React from 'react';
import {Request} from "./Request";
import s from './HW13.module.css'

export const HW13 = () => {
    return (
        <div>
            <div className='containerheader'>
                <h1>
                    Homeworks 13
                </h1>
            </div>

            <div className={s.main}>
                <Request/>
            </div>
            <hr/>
        </div>
    );
};
