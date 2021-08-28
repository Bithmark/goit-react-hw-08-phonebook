import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navigation from "./components/Navigation/Navigation";
import { Switch } from "react-router-dom";

import Contacts from "./views/Contacts";
import HomeView from "./views/HomeView";
import LogIn from "./views/LogIn";
import Register from "./views/Register";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { getCurrentUser } from "./redux/auth/auth-operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Switch>
        <PublicRoute path="/" exact component={HomeView} />
        <PrivateRoute
          path="/contacts"
          redirectTo="/login"
          component={Contacts}
        />
        <PublicRoute
          restricted
          path="/login"
          redirectTo="/contacts"
          component={LogIn}
        />
        <PublicRoute
          redirectTo="/contacts"
          restricted
          path="/register"
          exact
          component={Register}
        />
      </Switch>
    </>
  );
}

export default App;
