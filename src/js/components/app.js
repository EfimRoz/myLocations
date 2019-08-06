import React from "react";
import List from "./List";
import Form from "./Form";
const App = () => (
    <div>
        <div>
            <h2>Locations</h2>
            <List />
        </div>
        <div>
            <h2>Add a new Location</h2>
            <Form />
        </div>
    </div>
);
export default App;