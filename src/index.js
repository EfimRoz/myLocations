import React from "react";
import FormContainer from "./js/components/container";
import ReactDOM from "react-dom";
import index from "./js/index";

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;