import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });

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
    return "You are authenticated";
  }
};
export default Home;
