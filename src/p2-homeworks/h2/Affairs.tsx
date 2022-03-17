import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix an
    filter: FilterType;
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) =>  (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />))


    const setAll = (() => props.setFilter('all'))
    const setHigh = (() => props.setFilter('high'))
    const setMiddle = (() => props.setFilter('middle'))
    const setLow = (() => props.setFilter('low'))

    const addClassButton = (filter: FilterType) => {
        return s.mainButton + ' ' + (filter === props.filter ? s.mainButtonPriority : '')
    }

    return (
        <div className={s.hw2Container}>
            <div className={s.hw2Main}>
                {mappedAffairs}
            </div>
            <div className={s.buttonsContainer}>
            <button className={addClassButton('all')} onClick={setAll}>All</button>
            <button className={addClassButton('high')} onClick={setHigh}>High</button>
            <button className={addClassButton('middle')} onClick={setMiddle}>Middle</button>
            <button className={addClassButton('low')} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
