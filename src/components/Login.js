import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

const Login = () => {
  return (
    <form className="login-component">
      <TextField className="login-input" variant="outlined" label="Username:" />
      <br />
      <TextField className="login-input" variant="outlined" label="Password" type="password" />
      <br />
      <Button color="primary" variant="contained" type="submit">
        Login
      </Button>
      <Typography>- OR -</Typography>
      <Button color="primary" variant="contained" type="submit">
        Continue as Guest
      </Button>
    </form>
  )
}

export default Login;