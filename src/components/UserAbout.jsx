import React from "react";

function UserAbout(){
    var uaStyling =
    {
        border: "2px solid blue",
        height: "320px",
    }
    var pStyle =
    {
        padding: "5px 15px",
        color: "grey",
        fontSize: "15px",
        lineHeight: "20px",
        letterSpacing: ".7px",
        wordWrap: "break-word",
        fontFamily: "Arial",
    }
    return (
        <div style={uaStyling}>
            <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export default UserAbout;