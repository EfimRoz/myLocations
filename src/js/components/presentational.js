import React from "react"
import App from "./app";
import { Provider } from "react-redux";
import store from "../store/index";



const Input = ({ label, text, type, id, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            value={value}
            onChange={handleChange}
            required
        />
        <Provider store={store}>
             <App />
         </Provider>
    </div>
);

export default Input;