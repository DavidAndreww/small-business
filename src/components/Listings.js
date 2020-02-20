import React from 'react'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const Listings = () => {
  return (
    <Container maxWidth="lg" className="listings">
            
            
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        {/* <TableCell>Delete</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                {/* {props.cars.map((car, idx) => ( */}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            {/* {car.id} */}
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            {/* <DeleteIcon/> */}
                        </TableCell>
                    </TableRow>
                {/* ))} */}
                </TableBody>
            </Table>
        </Container>
  )
}

export default Listings;