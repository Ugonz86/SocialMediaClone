import React from "react";
import Contacts from "./Contacts";

function CRight(){
  var cRightStyling =
  {
    border: "2px solid blue",
    margin: "20px 0px",
    marginLeft: "10px",
    width: "21%",
    height: "300px",
    display: "inline",
    position: "relative",
    float: "right",
    fontFamily: "Arial",
    color: "grey"
  
  }
  return (
    <div style={cRightStyling}>
        <h3>Lorem Ipsum</h3>
        <Contacts img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" />
        <Contacts img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" />
        <Contacts img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" />
    </div>
  );
}
export default CRight;