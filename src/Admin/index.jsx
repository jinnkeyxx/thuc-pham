import React , {lazy , Suspense} from 'react'
import LoadingComponent from '../Thucpham/Compomnents/Loading'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
const IndexPage = lazy(() => import('./Pages/index'))
const Admin = () => {
    return(
        <Router>
            <Suspense fallback={<LoadingComponent/>}>
                <Switch>
                    <Route path="/">
                        <IndexPage/>
                    </Route>
                </Switch>
            </Suspense>

        </Router>
    )
}
export default React.memo(Admin)