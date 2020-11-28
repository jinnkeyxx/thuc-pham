import React , { lazy , Suspense }from 'react'
import LoadingComponent from '../Thucpham/Compomnents/Layout'
import './Components/css/layout.css'
// import FormLogin from '../Components/FormLogin'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
const IndexPage = lazy(() => import('./Pages/Index'))
const FormLogin = lazy(() => import('./Components/FormLogin'))
const Admin = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                    <Route path="/admin/login">
                        <FormLogin/>
                    </Route>
                    <Route path="/">
                        <IndexPage/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(Admin)
