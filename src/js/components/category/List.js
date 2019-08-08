import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log('categories:', state.categories.categories)
    return { categories: state.categories.categories,  reduction: state.reduction.reduction };
};
const activateLasers = (id) => {
    console.log('activateLasers', id);
}
const CategoriesList = ({ categories }) => (
    <ul>
        {
             categories.map(el => (
            <li key={el.id} onClick={() => activateLasers(el.id)}>
            {/* Name, Address, Coordinates, and Category. */}
               Name - {el.name}
            </li>
        )) }
    </ul>
);
const List = connect(mapStateToProps)(CategoriesList);
export default List;