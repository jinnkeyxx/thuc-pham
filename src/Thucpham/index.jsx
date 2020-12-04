import React ,{ lazy , Suspense } from 'react'
import LoadingComponent from './Compomnents/Loading'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as api from './Service/Login'
const IndexPage = lazy(() => import('./Pages/index'))
const LoginPage = lazy(() => import('./Pages/Login'))
const ProductPage = lazy(() => import('./Pages/Product'))

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
const App = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                    <Route path="/product/:name">
                        <ProductPage/>
                    </Route>
                    <UserLogin path="/login">
                        <LoginPage/>
                    </UserLogin>
                    <PrivateRoute path="/admin">
                        <LoginPage/>
                    </PrivateRoute>
                    <PrivateRoute extract path="/">
                        <IndexPage/>
                    </PrivateRoute>
                </Switch>
            </Suspense>
        </Router>

    )
}
export default React.memo(App)