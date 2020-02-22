import React from "react";
import { TextField, Button } from "@material-ui/core";

class AddBusiness extends React.Component {
  state = {
    name: "",
    description: "",
    hours: "",
    address: "",
    success: false
  };

  handleFormChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newBiz = {
      name: this.state.name,
      address: this.state.address,
      hours: this.state.hours,
      description: this.state.description
    };
    this.props.addBiz(newBiz);
    //e.currentTarget.reset()
    // I don't think this breaks single source of truth, but I still feel it's not best practice...
    this.setState({
      name: "",
      address: "",
      description: "",
      hours: ""
    });
  };

  render() {
    return (
      <form className="add-business-component" onSubmit={this.handleSubmit}>
        <TextField
          label="Business Name"
          value={this.state.name}
          onChange={this.handleFormChange}
          id="name"
          variant="outlined"
        />
        <br />
        <TextField
          label="Address"
          value={this.state.address}
          onChange={this.handleFormChange}
          id="address"
          variant="outlined"
        />
        <br />
        <TextField
          label="Hours (ex. 8AM - 9PM)"
          value={this.state.hours}
          onChange={this.handleFormChange}
          id="hours"
          variant="outlined"
        />
        <br />
        <TextField
          label="Description"
          value={this.state.description}
          onChange={this.handleFormChange}
          id="description"
          variant="outlined"
        />
        <br />
        <Button
          // onClick={() => this.props.addBiz(this.state.name)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add Biz
        </Button>
      </form>
    );
  }
}

export default AddBusiness;
