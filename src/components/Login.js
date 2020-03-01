import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = props => {
  const validateAuth = e => {
    e.preventDefault();
    document.cookie = `loggedIn=true;max-age=30*1000`;
    window.location.replace("/listings");
    // props.history.push('/listings')
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
      </form>
    </div>
  );
};

export default Login;
