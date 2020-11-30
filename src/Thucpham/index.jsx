import React ,{ lazy , Suspense } from 'react'
import LoadingComponent from './Compomnents/Loading'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const IndexPage = lazy(() => import('./Pages/index'))
const FoodPage = lazy(() => import('./Pages/Food'))
const LoginPage = lazy(() => import('./Pages/Login'))
const AdminPage = lazy(() => import('../Admin/index'))

const App = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                    <Route path="/food">
                        <FoodPage/>
                    </Route>
                    <Route path="/admin">
                        <AdminPage/>
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