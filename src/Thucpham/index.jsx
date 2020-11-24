import React ,{lazy , Suspense} from 'react'


import LoadingComponent from './Compomnents/Loading'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const IndexPages = lazy(() => import('./Pages/index'))
const App = () => {
    return(
        <Suspense fallback={<LoadingComponent/>}>
            <Router>
                <Switch>
                    <Route extract path="/">
                        <IndexPages/>
                    </Route>
                </Switch>
            </Router>
        </Suspense>

    )
}
export default React.memo(App)