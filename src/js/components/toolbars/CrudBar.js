import React, { Component } from "react";
import { connect } from "react-redux";
import {initCreate, initUpdate, initDelete} from "../../actions" 
import "./style.css"

const mapDispatchToProps = dispatch => {
    return {
        initCreate: () => dispatch(initCreate()),
        initUpdate: () => dispatch(initUpdate()),
        initDelete: () => dispatch(initDelete())
    };
};
const mapStateToProps = state => {
    return state.reduction;
};
class CrudBar extends Component { // !IMPORTANT wtf is formContainer?!
    constructor() {
        super();
        this.state = {};
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

    }
    create() {
        this.props.initCreate(this.state);
    }
    update() {
        this.props.initUpdate();
    }
    delete() {
        this.props.initDelete();
    }
    
    render(red) {
        // const { name } = this.state; // !IMPORTANT
        setTimeout( () => {
            console.log('red');
        }, 5000);
        return (
            <div>
                <button 
                    className={(this.props.toggleCreate?  'active' : null )} 
                    onClick={this.create}>
                    Create
                </button>
                <button 
                    className={(this.props.toggleUpdate?  'active' : null )}
                    onClick={this.update}>
                    Update
                </button>
                <button
                    className={(this.props.toggleDelete?  'active' : null )}
                    onClick={this.delete}>
                    Delete
                </button>
            </div>
        )
    }
}

const toolBar = connect(mapStateToProps, mapDispatchToProps)(CrudBar);
export default toolBar;