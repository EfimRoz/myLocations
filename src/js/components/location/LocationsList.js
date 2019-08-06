import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    // console.log('passing those locations:', state)
    return state.locations; // !IMPORTANT
};

const LocationsList = ({ locations }) => (
    <ul>
        {
             locations.map(el => (
            <li key={el.id}>
            {/* Name, Address, Coordinates, and Category. */}
               Name - {el.name}, Address - {el.address}, Coordinates - {el.coordinates}, Category - {el.category}
            </li>
        )) }
    </ul>
);
const List = connect(mapStateToProps)(LocationsList);
export default List;