import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { checkAuth } from "../HelperFunctions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "5em"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = props => {
  const classes = useStyles();
  console.log(checkAuth())
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          <Link className="link" to="/listings">
            <Button color="inherit">Listings</Button>
          </Link>
          {/* if user logs in, displays ADD BUTTON */}
          {checkAuth() && (
            <Link className="link" to="/add">
              <Button color="inherit">Add</Button>
            </Link>
          )}
          {/* if user logs in, dispays LOGOUT BUTTON */}
          {checkAuth() ? (
            <Link className="link" to="/">
              <Button color="inherit">Logout</Button>
            </Link>
          ) : (
            <Link className="link" to="/">
              <Button color="inherit">Log In</Button>
            </Link>
          )}
          {/* if user logs in as guest, displays LOG IN BUTTON */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
