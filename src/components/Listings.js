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

preferredBehaviors = [

]

nonPreferredBehaviors = [

]
  
    return (
      <form action="" onSubmit={handlSubmit}>
        {behaviorlist.map(behavior=>{
          <input type="checkbox" value={behavior.value}>behavior.name</input>
        })}
      </form>
    );
  
}

export default Listings;
