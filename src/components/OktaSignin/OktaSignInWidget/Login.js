import React from "react";
// import { Redirect } from "react-router-dom";
import OktaSignInWidget from "./OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react";

const Login = ({ oktaConfig }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log("Sign in error:", err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }

  return authState.isAuthenticated ? (
    <div>You are authenticated</div>
  ) : (
    <OktaSignInWidget config={oktaConfig} onSuccess={onSuccess} onError={onError} />
  );
};

export default Login;
