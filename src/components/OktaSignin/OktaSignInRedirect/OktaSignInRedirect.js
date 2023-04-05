import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";

const OktaSignInRedirect = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });
  const history = useHistory();

  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center">
        <button className="btn btn-primary" onClick={login}>
          Login with Okta Redirect
        </button>
      </div>
    );
  } else {
    history.push("/profile");
  }
};
export default OktaSignInRedirect;
