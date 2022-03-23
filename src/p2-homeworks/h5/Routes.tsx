import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {Junior_plus} from "./pages/Junior_plus";
import {PreJunior} from "./pages/PreJunior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PlUS: '/junior_plus'
}

function Router() {
    return (
        <div>
            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PlUS} element={<Junior_plus/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Router
