import React from 'react'
import Message from "./Message";
import s from './HW1.module.css'
import '../../p1-main/m1-ui/u1-app/Header.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Vitali',
    message: 'Hello, how are you?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div className={s.h1}>

                <div className='containerheader'>
                    <h1>
                        Homeworks 1
                    </h1>
                </div>
                <div className={s.h1container}>
                    <Message
                        avatar={messageData.avatar}
                        name={messageData.name}
                        message={messageData.message}
                        time={messageData.time}
                    />
                </div>
            </div>
        </div>
    )
}

export default HW1
