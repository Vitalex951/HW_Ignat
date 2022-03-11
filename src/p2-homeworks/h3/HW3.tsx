import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './HW3.module.css'
import '../../p1-main/m1-ui/u1-app/Header.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => {// need to fix any
        setUsers([...users, {name, _id: v1()}]) // need to fix
    }

    return (
        <div className={s.container}>
            <hr/>
            <div className='containerheader'>
                <h1>
                    Homeworks 3
                </h1>
            </div>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3
