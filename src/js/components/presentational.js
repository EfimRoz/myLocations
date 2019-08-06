import React from "react"
import App from "./App";
import { Provider } from "react-redux";
import store from "../store/index";



const Input = ({ label, type, id, value, onChange, className }) => (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                className={className}
                id={id}
                value={value}
                onChange={onChange}
                required
            />
        </div>
);

export default Input;