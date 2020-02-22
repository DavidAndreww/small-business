import React from "react";
import { TextField, Button } from "@material-ui/core";

class AddBusiness extends React.Component {
  state = {
    name: "",
    description: "",
    hours: "",
    address: ""
  };

  business = {
    name: this.state.name,
    description: this.state.description,
    hours: this.state.hours,
    address: this.state.address
  };

  render() {
    return (
      <form className="add-business-component">
        <TextField variant="outlined" label="Business Name" />
        <br />
        <TextField variant="outlined" label="Address" />
        <br />
        <TextField variant="outlined" label="Hours (ex. 8AM - 9PM)" />
        <br />
        <TextField variant="outlined" label="Description" />
        <br />
        <Button
          onClick={() => this.props.addBiz(this.business)}
          variant="contained"
          color="primary"
        >
          ADD BIZ
        </Button>
      </form>
    );
  }
}

export default AddBusiness;
