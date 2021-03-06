import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from 'moment'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>()
    const [date, setDate] = useState<string>(moment().format('ll'))
    const [time, setTime] = useState<string>(moment().format('LTS'))
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(moment().format('ll'))
            setTime(moment().format('LTS'))
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setTimeout(() => {
            setShow(false)
        }, 1000)

    }

    return (
        <div>
            <div className={s.timeDate}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {time}
                </div>

                {show && (
                    <div>
                        {date}
                    </div>
                )}</div>
            <div className={s.buttons}><SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton></div>
        </div>
    )
}

export default Clock
