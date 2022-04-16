import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'


function HW11() {
    const [values, setValues] = useState<number[]>([0, 100])

    return (
        <div>
            <hr/>
            <div className='containerheader'>
                <h1>
                    Homeworks 11
                </h1>
            </div>
            <div className={s.container}>

                <div className={s.range}>
                    <div className={s.spanRange}>
                        <span className={s.value}>{values[0]}</span>
                    </div>
                    <SuperRange
                        values={values}
                        setValues={setValues}
                    />
                    <div className={s.spanRange}>
                        <span>{100}</span>
                    </div>
                </div>

                <div className={s.rangeDouble}>
                    <div className={s.spanRange}>
                        <span>{values[0]}</span>
                    </div>
                    <SuperDoubleRange
                        values={values}
                        setValues={setValues}
                    />
                    <div className={s.spanRange}>
                        <span>{values[1]}</span>
                    </div>

                </div>

                <hr/>
                <hr/>
            </div>
        </div>
    )
}

export default HW11
