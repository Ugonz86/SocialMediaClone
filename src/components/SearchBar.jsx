import React from "react";

function SearchBar(){
  var styling =
  {
    float: "right",
    display: "inline",
    color: "red"
  }
  var inputStyling =
    {
        border: "2px solid blue",
        borderRadius: "20px",
        padding: "5px 15px",
        fontSize: "16px"
    }
    var tweetStyling =
    {
        border: "2px solid blue",
        borderRadius: "20px",
        padding: "5px 25px",
        marginLeft: "30px",
        color: "slategrey",
        fontSize: "16px" 
    }

  return (
    <div style={styling}>
      <input style={inputStyling} placeholder="Search"/>
      <button style={tweetStyling}>Tweet</button>
    </div>
  );
}
export default SearchBar;