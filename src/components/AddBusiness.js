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

  // updates state keys as user enters text in <TextField />
  handleFormChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // 1: creates new business object using values from state keys
  // 2: calls addBiz() action to update listings state
  handleSubmit = e => {
    e.preventDefault();
    const newBiz = {
      name: this.state.name,
      address: this.state.address,
      hours: this.state.hours,
      description: this.state.description
    };
    this.props.addBiz(newBiz);
    this.setState({
      name: "",
      address: "",
      description: "",
      hours: "",
    });
    alert('Sucessfully added business!')
  };

  render() {
    return (
      <form className="add-business-component" onSubmit={this.handleSubmit}>
        <TextField
          required
          label="Business Name"
          value={this.state.name}
          onChange={this.handleFormChange}
          id="name"
          variant="outlined"
        />
        <br />
        <TextField
          required
          label="Address"
          value={this.state.address}
          onChange={this.handleFormChange}
          id="address"
          variant="outlined"
        />
        <br />
        <TextField
          required
          label="Hours (ex. 8AM - 9PM)"
          value={this.state.hours}
          onChange={this.handleFormChange}
          id="hours"
          variant="outlined"
        />
        <br />
        <TextField
          required
          label="Description"
          value={this.state.description}
          onChange={this.handleFormChange}
          id="description"
          variant="outlined"
        />
        <br />
        <Button
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
