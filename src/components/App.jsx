import React from "react";
import NavBar from "./NavBar";
import Body from "./Body";


function App(){
  var appStyling =
  {
    color: "blue",
    borderTop: "2px solid grey",
    margin: "30px 0px"
  }
    return (
      <div>
        <NavBar/>
        <hr style={appStyling}/>
        <Body/>
      </div>
    );
  }
  
  export default App;