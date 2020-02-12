import React from "react";
import CLeft from "./CLeft";
import CMiddle from "./CMiddle";
import CRight from "./CRight";

function Body(){
  var bStyling =
  {
    display: "flex",
    margin: "20px 0px"
  }
  return (
    <div style={bStyling}>
      <CLeft/>
      <CMiddle/>
      <CRight/>
    </div>
  );
}
export default Body;