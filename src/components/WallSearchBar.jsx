import React from "react";

function WallSearchBar(){
    var styling =
    {
        backgroundColor: "#33AAFF",
        display: "block",
        paddingBottom: "20px",
        color: "grey",
        marginTop: "20px"
    }
    // var YellowSquareStyle =
    // {
    //     background: "blue",
    //     width: "35px",
    //     height: "35px",
    //     float: "left",
    //     margin: "20px 40px"
    // }
    var InputStyle =
    {
        display: "inline-block",
        width: "300px",
        height: "35px",
        border: "1.5px solid #yellow",
        // marginTop: "10px",
        marginLeft: "10px",
        color: "purple",
        padding: "0px 20px"
    }

    var ImageStyle =
    {
        display: "inline-block",
        width: "50px",
        paddingTop: "-60px",
        border: "2px solid white",
        borderRadius: "50px",
        marginLeft: "16px",
        marginTop: "20px",

    }
    
    return (
        <div style={styling}>
            <img style={ImageStyle} src="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png"></img>
            <input  style={InputStyle} placeholder="What's Happening?"></input>
        </div>
    );
}

export default WallSearchBar;