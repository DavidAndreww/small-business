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
import { Link } from 'react-router-dom'

class Listings extends React.Component {

  componentDidMount(){
    if(this.props.isGuest === false)
    this.props.logIn()
  }
  render(){
    return (
      <Container maxWidth="lg" className="listings">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Hours</b></TableCell>
              <TableCell><b>Address</b></TableCell>
              {this.props.loggedIn ? <TableCell><b>Delete</b></TableCell> : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.listings.map((obj, idx) => (
              <TableRow key={obj.name}>
                <TableCell><Link to={`/details/${obj.name}`}>{obj.name}</Link></TableCell>
                <TableCell>{obj.description}</TableCell>
                <TableCell>{obj.hours}</TableCell>
                <TableCell>{obj.address}</TableCell>
                {this.props.loggedIn ? (
                  <TableCell>
                    <Button><DeleteIcon
                    onClick={() => this.props.deleteBiz(obj.name)}
                      className="delete-icon"
                    /></Button>
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    );
  }
};

export default Listings;
