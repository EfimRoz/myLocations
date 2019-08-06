import React from "react";
import List from "./location/LocationsList";
import Form from "./location/Form";
import Category from "./category/Category"
const App = () => (
    <div>
        <div>
            <h2>Categories</h2>
            <Category />
        </div>
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