import React from "react";
import { TextField, Button } from "@material-ui/core";

class AddBusiness extends React.Component {
  state = {
    name: "",
    description: "",
    hours: "",
    address: ""
  };

  // business = {
  //   name: this.state.name,
  //   description: this.state.description,
  //   hours: this.state.hours,
  //   address: this.state.address
  // };

  handleInputChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <form className="add-business-component">
        <TextField id="name" variant="outlined" label="Business Name" />
        <br />
        <TextField id="address" variant="outlined" label="Address" />
        <br />
        <TextField
          id="hours"
          variant="outlined"
          label="Hours (ex. 8AM - 9PM)"
        />
        <br />
        <TextField id="description" variant="outlined" label="Description" />
        <br />
        <Button
          onClick={() => this.props.addBiz(this.business)}
          // type="submit"
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
