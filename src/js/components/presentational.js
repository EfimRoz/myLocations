import React from "react"
import App from "./App";
import { Provider } from "react-redux";
import store from "../store/index";



const Input = ({ label, text, type, id, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);

export default Input;