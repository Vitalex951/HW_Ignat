import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'
import './../../p1-main/m1-ui/u1-app/Header.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        console.log(saveState)
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {

        setValue(restoreState<string>('editable-span-value', value))
    }

    return (
        <div>
            <hr/>
            <div className={s.main}>
                <div className='containerheader'>
                    <h1>
                        Homeworks 6
                    </h1>
                </div>
                <div className={s.container}>
                    <div className={s.spancontainer}>

                        <SuperEditableSpan
                            value={value}
                            onChangeText={setValue}
                            spanProps={{children: value ? undefined : 'enter text...'}}
                        />
                    </div>
                    <div className={s.buttons}>
                        <SuperButton onClick={save}>save</SuperButton>
                        <SuperButton onClick={restore}>restore</SuperButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW6
