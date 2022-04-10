import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from 'moment'
import s from './HW9.module.css'

export  function Clock_v1() {
    const [timerId, setTimerId] = useState<number>()
    const [date, setDate] = useState<any>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString()
    const stringDate = date.toLocaleDateString()

    return (
        <div>
            <div className={s.timeDate}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}</div>
            <div className={s.buttons}><SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton></div>
        </div>
    )
}
