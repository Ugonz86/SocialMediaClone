import React from "react";
import PropTypes from "prop-types";

function Contacts(props){
    var styling =
    {
        border: "1px solid #C3C5C7",
        padding: "10px",
        paddingBottom: "30px"
    }

    var ImgStyling =
    {
        width: "45px",
        padding: "10px",
        float: "left"
    }

    var TitleStyle =
    {
        fontWeight: "bold",
        paddingTop: "-50px",
        marginLeft: "10px"
    }


    return (
        <div style={styling}>
            <img style={ImgStyling} src={props.img}/>
            <span style={TitleStyle}>{props.title}</span>
            <button>Add Friend</button>
            
        </div>
    );
}
Contacts.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    button: PropTypes.string
};

export default Contacts;