import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '5em'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }, 
  color: {
    background: 'green'
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  console.log(props.loggedIn)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Austin Small Business 
          </Typography>
          <Button color="inherit">Listings</Button>
          {props.loggedIn ? <Button color="inherit">Add</Button> : null }
          {props.loggedIn ? <Button color="inherit">Logout</Button> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar