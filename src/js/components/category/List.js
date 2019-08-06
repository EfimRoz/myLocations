import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return state.categories;
};

const CategoriesList = ({ categories }) => (
    <ul>
        {
             categories.map(el => (
            <li key={el.id}>
            {/* Name, Address, Coordinates, and Category. */}
               Name - {el.name}
            </li>
        )) }
    </ul>
);
const List = connect(mapStateToProps)(CategoriesList);
export default List;