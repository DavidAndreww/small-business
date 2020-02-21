import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <form className="login-component">
      <TextField className="login-input" variant="outlined" label="Username:" />
      <br />
      <TextField className="login-input" variant="outlined" label="Password" type="password" />
      <br />
      <Button color="primary" variant="contained" onClick={()=>props.logIn()}>
        Login
      </Button>
      <Typography>- OR -</Typography>
      <Button color="primary" variant="contained" onClick={()=>props.logInGuest()}>
        Continue as Guest
      </Button>
    </form>
  )
}

export default Login;