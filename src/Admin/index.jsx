

import React , { useState, lazy , Suspense} from 'react'
import LoadingComponent from '../Thucpham/Compomnents/Loading'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
const IndexPage = lazy(() => import('./Pages/Dashboard'))
const Login = lazy(() => import('./Pages/Login'))
const Admin = () => {
    const [ isLogin , setLogin ] = useState(false)
    const [valueEmail , setValueEmail] = useState("")
    const [valuePassword , setValuePassword] = useState("")
    const submitForm = (event) => {

    }

    const onChange = (event) => {

    }
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                <Route path="/admin/login">
                        {isLogin && localStorage.getItem('login') ? (<Redirect to="/"/>) : (<Login submit={submitForm} valueEmail={valueEmail} valuePassword={valuePassword} email="email" password="password" changeInput={onChange}/>)}
                    </Route>
                    <Route extract path="/">
                        {!isLogin && !localStorage.getItem('login') ? (<Redirect to="/admin/login"/>) : (<IndexPage/>)}
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(Admin)

