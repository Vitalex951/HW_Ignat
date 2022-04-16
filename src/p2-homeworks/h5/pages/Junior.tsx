import React from 'react'
import '../../../p1-main/m1-ui/u1-app/Header.css'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";
import HW11 from "../../h11/HW11";

export function Junior() {
    return (
        <>
            <HW9/>
            <HW7/>
            <HW8/>
            <Provider store={store}>
                <HW10/>
            </Provider>
            <HW11/>
        </>
    )
}
