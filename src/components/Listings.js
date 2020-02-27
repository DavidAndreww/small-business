import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { checkAuth } from '../HelperFunctions';

class Listings extends React.Component {
  // if logged in with username and password, changes state to logged in to allow for proper links in navbar to be displayed
  componentDidMount() {
    // if (this.props.isGuest === false) {
      // this.props.logIn();
    // if (this.props.isGuest === true) {
    //   // why won't this delete cookie? user can log in, log out, log in as guest, and still have acceess to 'add' path. por que?
    //   console.log(this.props.isGuest)
    //   delete document.cookie;
    //   document.cookie = 'loggedIn='
    // }
  }

  render() {
    return (
      <Container maxWidth="lg" className="listings">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Hours</b>
              </TableCell>
              <TableCell>
                <b>Address</b>
              </TableCell>
              {/*if loggedIn, display delete button COLUMN */}
              {checkAuth() ? (
                <TableCell>
                  <b>Delete</b>
                </TableCell>
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.listings.map((obj, idx) => (
              <TableRow key={obj.name}>
                <TableCell>
                  <Link to={`/details/${obj.name}`}>{obj.name}</Link>
                </TableCell>
                <TableCell>{obj.description}</TableCell>
                <TableCell>{obj.hours}</TableCell>
                <TableCell>{obj.address}</TableCell>
                {/* if loggedIn, display delete BUTTON for each business */}
                {checkAuth() ? (
                  <TableCell>
                    <Button>
                      <DeleteIcon
                        onClick={() => this.props.deleteBiz(obj.name)}
                        className="delete-icon"
                      />
                    </Button>
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    );
  }
}

export default Listings;
