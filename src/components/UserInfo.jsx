import React from "react";

function UserInfo(){
    var uiStyling =
    {
        margin: "20px 0px",
        border: "2px solid blue",
        height: "210px",
        // marginTop: "-35px"
    }
    var BlueDivStyle =
    {
        backgroundColor: "#33AAFF",
        height: "110px"
    }

    var ImageStyle =
    {
        width: "90px",
        marginTop: "-60px",
        border: "2px solid white",
        borderRadius: "50px",
        marginLeft: "16px"
    }

    var NameStyle =
    {
        color: "slategrey",
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "Arial",
        marginTop: "-20px",
        display: "inline-block",
        marginLeft: "10px"
    }
  
    var LinkStyle =
    {
        marginTop: "11px"
    }

    var SpanStyle =
    {
        color: "slategrey",
        fontSize: "12px",
        marginLeft: "24px",
        fontFamily: "Arial",
        marginTop: "33px"
    }
    return (
        <div style={uiStyling}>
            <div style={BlueDivStyle}/>   
            <img style={ImageStyle} src="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png"></img>
            <div style={NameStyle}>Uriel Gonzalez</div>
            <div style={LinkStyle}>
                <span style={SpanStyle}>TWEETS</span>
                <span style={SpanStyle}>FOLLOWING</span>
                <span style={SpanStyle}>FOLLOWERS</span>
            </div>
        </div>
      );
}

export default UserInfo;