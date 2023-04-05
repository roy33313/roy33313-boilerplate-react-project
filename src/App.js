import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

import OktaSignInRedirect from "./components/OktaSignin/OktaSignInRedirect/OktaSignInRedirect";
import Profile from "./components/Profile/Profile";
import { oktaConfig } from "./components/OktaSignin/OktaConfig";
import Image from "./components/Image/Image";
import Login from "./components/OktaSignin/OktaSignInWidget/Login";

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
        <Route path={CALLBACK_PATH} exact component={LoginCallback} />
        <Route path="/" exact>
          <Image img="https://www.dairyfoods.com/ext/resources/Cargill-logo.jpg?1615840840" />
          <OktaSignInRedirect />
          <br />
          <Login />
        </Route>
        <SecureRoute path="/profile" component={Profile} />
      </Switch>
    </Security>
  );
};

export default App;
