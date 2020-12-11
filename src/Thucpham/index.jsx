import React ,{ lazy , Suspense } from 'react'
import LoadingComponent from './Compomnents/Loading'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as api from './Service/apiHelper'
const IndexPage = lazy(() => import('./Pages/index'))
const LoginPage = lazy(() => import('./Pages/Login'))
const ProductPage = lazy(() => import('./Pages/Product'))
const Dashboard = lazy(() => import('../Admin/Pages/Dashboard'))
const Upload = lazy(() => import('../Admin/Pages/Upload'))
const isAuthencated = api.isLogin()
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
const App = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                    <PrivateRoute path="/dashboard">
                        <Dashboard/>
                    </PrivateRoute>
                    <PrivateRoute path="/upload">
                        <Upload/>
                    </PrivateRoute>
                    <Route path="/product/:name">
                        <ProductPage/>
                    </Route>
                    <UserLogin path="/login">
                        <LoginPage/>
                    </UserLogin>
                    <Route extract path="/">
                        <IndexPage/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>

    )
}
export default React.memo(App)