import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addLocation } from "../actions";
import Input from "./presentational"

const mapDispatchToProps = dispatch => {
    return {
        addLocation: location => dispatch(addLocation(location))
    };
};

const cleanState = {
    name: "", 
    address: "",
    coordinates: "", 
    category: ""
}
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {...cleanState};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        // console.log('Submited', event);
        event.preventDefault();
        const { name, address, coordinates, category } = this.state; // destructuring assignment
        const id = uuidv1();
        this.props.addLocation({ id, name, address, coordinates, category });
        this.setState({...cleanState});
    }

    render() {
        const { name, address, coordinates, category } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    {/* <label htmlFor="name">Name</label> */}
                    <Input
                        type="text"
                        label="Name"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    {/* <label htmlFor="address">Address</label> */}
                    <Input
                        type="text"
                        label="Address"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={this.handleChange}
                    />
                    {/* <label htmlFor="coordinates">Coordinates</label> */}
                    <Input
                        type="text"
                        label="Coordinates"
                        className="form-control"
                        id="coordinates"
                        value={coordinates}
                        onChange={this.handleChange}
                    />
                    
                    {/* <label htmlFor="category">Category</label> */}
                    <Input
                        type="text"
                        label="Category"
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;