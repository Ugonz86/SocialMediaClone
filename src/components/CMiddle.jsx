import React from "react";
import WallSearchBar from "./WallSearchBar";
import Tweet from "./Tweet";

function CMiddle(){
    var cMiddleStyling =
    {
      position: "relative",
      width: "40%",
      display: "inline-block",
      marginLeft: "10px",
      fontFamily: "Arial",
      color: "grey"
    }
    return (
      <div style={cMiddleStyling}>
        <WallSearchBar />
        <Tweet img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>
        <Tweet img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, <hr> Lorem ipsum"/>
        <Tweet img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>
        <Tweet img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>
        <Tweet img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>
        <Tweet img="http://files.softicons.com/download/web-icons/user-icons-by-mike-demetriou/png/256/user%20blue.png" title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "/>
      </div>
    );
  }
  export default CMiddle;