import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Login = props => {
  const validateAuth = e => {
    e.preventDefault();
    document.cookie = `loggedIn=true;max-age=30*1000`;
    props.history.push("/listings");
  };

  const validateGuest = () => {
    document.cookie = ''
    props.history.push("/listings");
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
        <Button color="primary" variant="contained" type="submit">
          Login
        </Button>
        <Typography>- OR -</Typography>
      </form>
      <Button color="primary" variant="contained" onClick={validateGuest}>
        Continue as Guest
      </Button>
    </div>
  );
};

export default Login;
