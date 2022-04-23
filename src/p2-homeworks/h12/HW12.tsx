import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeJS} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme)
    const dispatch = useDispatch()
   const onChangeHandler = (e: any) => {
       dispatch(changeThemeJS(e))
   }
    console.log(theme)
    return (
        <>
            <div className='containerheader'>
                <h1>
                    Homeworks 11
                </h1>
            </div>
            <div className={s[theme]}>

                <SuperRadio
                    options={["JS", 'React', 'Deff']}
                    value={theme}
                    onChangeOption={onChangeHandler}
                />
                <hr/>
            </div>
        </>
    );
}

export default HW12;
