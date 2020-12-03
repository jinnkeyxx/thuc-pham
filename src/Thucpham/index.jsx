import React ,{ lazy , Suspense } from 'react'
import LoadingComponent from './Compomnents/Loading'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const IndexPage = lazy(() => import('./Pages/index'))
const LoginPage = lazy(() => import('./Pages/Login'))
const ProductPage = lazy(() => import('./Pages/Product'))

const App = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                    <Route path="/product/:name">
                        <ProductPage/>

                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route extract path="/">
                        <IndexPage/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>

    )
}
export default React.memo(App)