import React from 'react'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {Provider} from "react-redux";
import store from "../../../p2-homeworks/h10/bll/store";

function App() {

    return (
        <div >
            <Provider store={store}>
                <HW5/>
            </Provider></div>

    )
}

export default App
