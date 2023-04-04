import React, { useContext } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import DetailsContext from "../../context/DetailsContext/DetailsContext";
import { useNavigate } from "react-router-dom";

export default function GoogleSignin() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const userDetails = useContext(DetailsContext);
  const navigate = useNavigate();

  const onLoginSuccess = (tokenResponse) => {
    const decodedResponse = jwt_decode(tokenResponse.credential);
    console.log(decodedResponse);
    userDetails.setDetails({
      firstName: decodedResponse.given_name,
      lastName: decodedResponse.family_name,
      email: decodedResponse.email,
      picture: decodedResponse.picture,
    });
    navigate("/profile");
  };

  const onLoginFailure = (err) => {
    console.log("failed to login", err);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} ux_mode="popup" />

        <GoogleLogin
          onSuccess={onLoginSuccess}
          onError={onLoginFailure}
          ux_mode="redirect"
          redirect_uri="http://localhost:3000/"
          select_account="true"
        />
      </GoogleOAuthProvider>
    </div>
  );
}
