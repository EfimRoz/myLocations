import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../presentational";
import uuidv1 from "uuid";
import { addCategory } from "../../actions"

const mapDispatchToProps = dispatch => {
    return {
        addCategory: category => dispatch(addCategory(category))
    };
};

class FormContainer extends Component { // !IMPORTANT wtf is formContainer?!
    constructor() {
        super();
        this.state = { name: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { name } = this.state; // destructuring assignment
        const id = uuidv1();
        this.props.addCategory({ id, name });
        this.setState({name: ""});
    }
    render() {
        const { name } = this.state; 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <Input
                        label="SEO title"
                        type="text"
                        id="name"
                        value={name}
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
const Form = connect(null, mapDispatchToProps)(FormContainer);

export default Form;
