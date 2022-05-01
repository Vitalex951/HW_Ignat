import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeJS} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme)
    const dispatch = useDispatch()
   const onChangeHandler = (e: any) => {
       dispatch(changeThemeJS(e))
   }
    return (
        <>
            <hr/>
            <div className='containerheader'>
                <h1>
                    Homeworks 12
                </h1>
            </div>
            <div className={s.container}>

                <SuperRadio
                    options={["JS", 'React', 'Deff']}
                    value={theme}
                    onChangeOption={onChangeHandler}
                />

            </div>
            <hr/>
        </>
    );
}

export default HW12;
