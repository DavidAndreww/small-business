import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Login = props => {

  // const validateAuth = () => {
  //   document.cookie = `loggedIn=true;max-age=60*1000`;
  //   window.location.replace('/')
  // };

  return (
    <div className="login-component">
      <form>
        <TextField
          className="login-input"
          variant="outlined"
          label="Username"
        />
        <br />
        <TextField
          className="login-input"
          variant="outlined"
          label="Password"
          type="password"
        />
        <br />
        <Link className="link" to="/listings">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            // onClick={()=>props.logIn()}
            onClick={()=>props.logIn()}
          >
            Login
          </Button>
        </Link>
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
