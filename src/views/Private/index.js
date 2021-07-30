import { lazy, Suspense } from 'react'
//import { Router, Redirect } from '@reach/router'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Loading } from './../../components/Loading'

const Profile = lazy(() => import('./Profile'))

export const Private = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router >
        <Switch>
          <Route component={Profile} path="/profile" />
          <Redirect from="/" to="profile" />
        </Switch>
      </Router>
    </Suspense>
  );
}