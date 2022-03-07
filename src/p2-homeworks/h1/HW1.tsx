import React from 'react'
import Message from "./Message";
import s from './HW1.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Vitali',
    message: 'Hello, how are you?',
    time: '22:00',
}

function HW1() {
    return (
        <div className={s.h1}>

            <div className={s.h1container}>
                <hr/>

                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                /></div>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
