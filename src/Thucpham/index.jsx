import React ,{ lazy , Suspense } from 'react'
import LoadingComponent from './Compomnents/Loading'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const IndexPage = lazy(() => import('./Pages/index'))
const FoodPage = lazy(() => import('./Pages/Food'))
<<<<<<< HEAD
const AdminPage = lazy(() => import('../Admin/index'))
=======
const AdminPage = lazy(() => import('../Admin/Pages/index'))
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
const App = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                    <Route path="/food">
                        <FoodPage/>
                    </Route>
<<<<<<< HEAD
                    <Route path="/admin">
                        <AdminPage/>
                    </Route>
                    <Route extract path="/">
=======
                    <Route path="/">
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
                        <IndexPage/>
                    </Route>
                    <Route path="/admin">
                        <AdminPage/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>

    )
}
export default React.memo(App)