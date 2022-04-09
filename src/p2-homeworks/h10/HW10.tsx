import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {Spinner} from "./Spinner";
import s from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
const loading = useSelector<AppStoreType, boolean>(state => state.loading)
  const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
     setTimeout(() => dispatch(loadingAC(false)), 2500)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <div className='containerheader'>
                <h1>
                    Homeworks 10
                </h1>
            </div>
            <div className={s.container}>
                {loading
                    ? (
                        <div>
                            <Spinner/>
                        </div>
                    ) : (
                        <div>
                            <SuperButton className={s.button} onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
