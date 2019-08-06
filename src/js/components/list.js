import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    // console.log('passing those locations:', state)
    return state.locations; // !IMPORTANT
};

const ConnectedList = ({ locations }) => (
    <ul>
        {
             locations.map(el => (
            <li key={el.id}>
                {el.title}
            </li>
        )) }
    </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;