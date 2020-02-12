import React from "react";
import UserInfo from "./UserInfo";
import UserAbout from "./UserAbout";

function CLeft(){
  var cLeftStyling =
  {
    margin: "20px 0px",
    marginTop: "-1px",
    width: "21%",
    display: "inline-block",
    paddingTop: "-70px",
    paddingLeft: "3px"
 
  }
  return (
    <div style={cLeftStyling}>
      <UserInfo/>
      <UserAbout/>
    </div>
  );
}
export default CLeft;