import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLoggedIn } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function PrivatRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAuthenticate = useSelector(getLoggedIn);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticate ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
