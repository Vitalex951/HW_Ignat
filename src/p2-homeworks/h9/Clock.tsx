import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from 'moment'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>()
    const [date, setDate] = useState<string>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(moment().format('LTS'))
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = moment().format('LTS'); // fix with date
    const stringDate = moment().format('ll');// fix with date

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

export default Clock
