import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
  // uses custom hook from the provider
  let auth = useAuth();
  return (
    <Route
      // return route props
      {...rest}
      // deconstruct location from the route props
      render={({ location }) =>
        // if there is a user, return children components, otherwise redirect to login page using...
        // location object as state
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
