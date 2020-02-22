import React from "react";
import { TextField, Button } from "@material-ui/core";

const AddBusiness = props => {
  return (
    <form className="add-business-component">
      <TextField variant="outlined" label="Business Name" /><br />
      <TextField variant="outlined" label="Address" /><br />
      <TextField variant="outlined" label="Hours (ex. 8AM - 9PM)" /><br />
      <TextField variant="outlined" label="Description" /><br />
      <Button onClick={() => props.addBiz()} variant='contained' color='primary'>ADD BIZ</Button>
    </form>
  );
};

export default AddBusiness;
