import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addLocation } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        addLocation: article => dispatch(addLocation(article))
    };
};
class ConnectedForm extends Component {

    constructor() {
        super();
        this.state = {
            name: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        console.log('Submited', event);
        event.preventDefault();
        const { name } = this.state; // destructuring assignment
        const id = uuidv1();
        this.props.addLocation({ name, id });
        this.setState({ name: "" });
    }

    render() {
        const { name, address, coordinates, category } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    {/* Name, Address, Coordinates, and Category. */}
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="coordinates">Coordinates</label>
                    <input
                        type="text"
                        className="form-control"
                        id="coordinates"
                        value={coordinates}
                        onChange={this.handleChange}
                    />
                    
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
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