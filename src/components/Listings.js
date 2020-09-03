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

const Listings = (props) => {

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
              {checkAuth() && (	
                <TableCell>	
                  <b>Delete</b>	
                </TableCell>	
              )}	
            </TableRow>	
          </TableHead>	
          <TableBody>	
            {props.listings.map((obj, idx) => (	
              <TableRow key={obj.name}>	
                <TableCell>	
                  <Link to={`/details/${obj.name}`}>{obj.name}</Link>	
                </TableCell>	
                <TableCell>{obj.description}</TableCell>	
                <TableCell>{obj.hours}</TableCell>	
                <TableCell>{obj.address}</TableCell>	
                {checkAuth() && (	
                  <TableCell>	
                    <Button>	
                      <DeleteIcon	
                        onClick={() => props.deleteBiz(obj.name)}	
                        className="delete-icon"	
                      />	
                    </Button>	
                  </TableCell>	
                ) }	
              </TableRow>	
            ))}	
          </TableBody>	
        </Table>	
      </Container>
)
  
}

export default Listings;


