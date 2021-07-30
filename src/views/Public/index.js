import { lazy, Suspense } from 'react'
//import { Router } from '@reach/router'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Loading } from './../../components/Loading'

const Login = lazy(() => import('./Login'));

export const Public = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router >
        <Switch>
          <Route component={Login}/>
        </Switch>
      </Router>
    </Suspense>
  );
}