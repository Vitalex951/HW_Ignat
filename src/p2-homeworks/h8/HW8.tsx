import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'
import {checkAC, homeWorkReducer, sortDownAC, sortUpAC} from "./bll/homeWorkReducer";

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div className={s.text} key={p._id}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))
    return (
        <div>
            <hr/>
            <div className='containerheader'>
                <h1>
                    Homeworks 8
                </h1>
            </div>
            <div className={s.container}>


                <div className={s.peoples}>{finalPeople}</div>

                <div className={s.buttons}>
                    <div><SuperButton onClick={sortUp}>Sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDown}>Sort Down</SuperButton></div>
                    <div><SuperButton onClick={check18}>Check 18+</SuperButton></div>
                </div>
            </div>
        </div>
    )
}

export default HW8
