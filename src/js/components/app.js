import React from "react";
import LocationsList from "./location/List";
import CategoriesList from "./category/List";

import Form from "./location/Form";
import Category from "./category/Category"
const App = () => (
    <div>
        <div>
            <h2>Categories</h2>
            <Category />
        </div>
        <div>
            <h2>Categories</h2>
            <CategoriesList />
        </div>
        <div>
            <h2>Locations</h2>
            <LocationsList />
        </div>
        <div>
            <h2>Add a new Location</h2>
            <Form />
        </div>
    </div>
);
export default App;