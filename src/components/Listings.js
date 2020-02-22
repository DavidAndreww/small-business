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

const Listings = props => {
  return (
    <Container maxWidth="lg" className="listings">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Hours</b></TableCell>
            <TableCell><b>Address</b></TableCell>
            {props.loggedIn ? <TableCell><b>Delete</b></TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((obj, idx) => (
            <TableRow key={obj.name}>
              <TableCell>{obj.name}</TableCell>
              <TableCell>{obj.description}</TableCell>
              <TableCell>{obj.hours}</TableCell>
              <TableCell>{"GIVE ADDRESS, PLZ"}</TableCell>
              {props.loggedIn ? (
                <TableCell>
                  <Button><DeleteIcon
                  onClick={() => props.deleteBiz(obj.name)}
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
};

export default Listings;
