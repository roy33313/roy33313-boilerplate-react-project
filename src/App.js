import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

import Home from "./components/OktaSignin/Home";
import Profile from "./components/Profile/Profile";
import { oktaConfig } from "./components/OktaSignin/OktaConfig";
// import Login from "./components/OktaSignin/Login";

const CALLBACK_PATH = "/login/callback";

const oktaAuth = new OktaAuth(oktaConfig);

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={CALLBACK_PATH} exact component={LoginCallback} />
        {/* <Route path="/" render={() => <Login />} /> */}
        <SecureRoute path="/profile" component={Profile} />
      </Switch>
    </Security>
  );
};

export default App;
