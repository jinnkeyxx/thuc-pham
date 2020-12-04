

import React , { useState, lazy , Suspense} from 'react'
import LoadingComponent from '../Thucpham/Compomnents/Loading'

import * as api from '../Service/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
const IndexPage = lazy(() => import('./Pages/Dashboard'))
const isAuthencated = api.isLogin()

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
        {...rest}
        render={({ location }) =>
        isAuthencated ? ( children ) : (
            <Redirect to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}
const UserLogin = ({ children, ...rest }) => {
    return (
        <Route
        {...rest}
        render={({ location }) =>
        !isAuthencated ? ( children ) : (
            <Redirect to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}
const Admin = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                    <PrivateRoute path="/dashboard">
                        <IndexPage/>
                    </PrivateRoute>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(Admin)

