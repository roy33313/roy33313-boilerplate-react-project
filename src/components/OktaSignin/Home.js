import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });

  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <div>
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

// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useOktaAuth } from "@okta/okta-react";

// const Home = () => {
//   const { oktaAuth, authState } = useOktaAuth();
//   const history = useHistory();

//   if (!authState) {
//     return <div>Loading ...</div>;
//   }

//   const handleLogin = async () => history.push("/login");

//   const handleLogout = async () => oktaAuth.signOut();

//   return (
//     <div id="home">
//       <Link to="/">Home</Link> | &nbsp;
//       <Link id="protected" to="/protected">
//         Protected
//       </Link>{" "}
//       | &nbsp;
//       {authState.isAuthenticated ? (
//         <button id="logout-button" type="button" onClick={handleLogout}>
//           Logout
//         </button>
//       ) : (
//         <button id="login-button" type="button" onClick={handleLogin}>
//           Login
//         </button>
//       )}
//     </div>
//   );
// };

// export default Home;
