import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Login = props => {

  const validateAuth = e => {
    e.preventDefault();
    document.cookie = `loggedIn=true;max-age=30*1000`;
    console.log("hi");
    window.location.replace('/listings')
  };

  return (
    <div className="login-component">
      <form onSubmit={validateAuth}>
        <TextField
          required
          className="login-input"
          variant="outlined"
          label="Username"
        />
        <br />
        <TextField
          required
          className="login-input"
          variant="outlined"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          // onClick={()=>props.logIn()}
          // onClick={()=>validateAuth()}
        >
          {/* <Link className="link" to="/listings"> */}
            Login
          {/* </Link> */}
        </Button>
        <Typography>- OR -</Typography>
      </form>
      <Link className="link" to="/listings">
        <Button
          color="primary"
          variant="contained"
          onClick={() => props.logInGuest()}
        >
          Continue as Guest
        </Button>
      </Link>
    </div>
  );
};

export default Login;
