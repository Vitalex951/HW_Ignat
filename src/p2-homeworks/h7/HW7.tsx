import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'

const arr = ['1', '2', '3', '4', '5']

function HW7() {
    const [value, onChangeOption] = useState(arr[3])

    return (
        <div>
            <hr/>
            <div className='containerheader'>
                <h1>
                    Homeworks 7
                </h1>
            </div>
            <div className={s.main}>
                <div>
                    <span className={s.text}>
                        Rate my style
                    </span>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />

                </div>
                <div className={s.radio}>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>
        </div>
    )
}

export default HW7
