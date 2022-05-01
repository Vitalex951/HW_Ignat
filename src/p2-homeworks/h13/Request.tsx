import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {API} from "./RequestsAPI";
import s from './HW13.module.css'

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    let [message, setMessage] = useState<string>('Loading')
    const onClick = () => {
        API.Post(checked)
            .then(res => {
                console.log(res.data)
                setMessage(res.data.info)
            }).catch((error) => {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message)
            setMessage(error.message)
        })
    }
    return (
        <div className={s.container}>
            <div className={`${s.text} ${message === 'Loading' ? '' : s.textColor}`}>
                {message}
            </div>
            <div className={s.buttons}>
                <SuperButton
                    onClick={onClick}>
                    POST
                </SuperButton>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}>
                    Success
                </SuperCheckbox>
            </div>
        </div>
    );
};