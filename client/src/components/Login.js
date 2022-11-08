import React from "react";
import { GoogleLogin } from "react-google-login";

const Login = ({ setShow }) => {
  const onSuccess = (res) => {
    //code here
    console.log("Response from Google: ", res);
    alert(`Welcome ${res.profileObj.name}`);
    localStorage.setItem("profile", JSON.stringify({ res }));
    setShow(true);
  };

  const onFailure = (res) => {
    //code here
    console.log("Failure: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENTID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        style={{ marginTop: "100px" }}
      />
    </div>
  );
};

export default Login;
