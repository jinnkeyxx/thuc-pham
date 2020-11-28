<<<<<<< HEAD
import React , { lazy , Suspense }from 'react'
import LoadingComponent from '../Thucpham/Compomnents/Layout'
import './Components/css/layout.css'
// import FormLogin from '../Components/FormLogin'

=======
import React , {lazy , Suspense} from 'react'
import LoadingComponent from '../Thucpham/Compomnents/Loading'
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
<<<<<<< HEAD
const IndexPage = lazy(() => import('./Pages/Index'))
const FormLogin = lazy(() => import('./Components/FormLogin'))
=======
const IndexPage = lazy(() => import('./Pages/index'))
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
const Admin = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
<<<<<<< HEAD
                    <Route path="/admin/login">
                        <FormLogin/>
                    </Route>
=======
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
                    <Route path="/">
                        <IndexPage/>
                    </Route>
                </Switch>
            </Suspense>
<<<<<<< HEAD
        </Router>
    )
}
export default React.memo(Admin)
=======

        </Router>
    )
}
export default React.memo(Admin)
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
