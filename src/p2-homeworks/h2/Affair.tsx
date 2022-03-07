import React from 'react'
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }
    // const someClassMain = (priority: string) => {
    //     return s.someClass + ' ' +  (s.priority)
    // }


    const someClassMain = s.someClass + ' ' + s[props.affair.priority]

    return (
        <div className={s.divPriorities}>
            <div className={s.text}>
                <span>{props.affair.name}</span>
            </div>
            <span className={someClassMain}>{props.affair.priority}</span>
            {/*<span className={someClassMain(props.affair.priority)}>{props.affair.priority}</span>*/}
            <div>
                <button className={s.button} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
