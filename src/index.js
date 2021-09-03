import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1 style={{ color: "red" }}>Hello World!</h1>,
  document.getElementById("root")
);
/* in this line what we do we add style but not in a fome of css 
becous this is not a css it is a js 
and rember that in js every thing in the {}
 or in a fome of 
 {key : valeu}
 like this ok */

/*  ther are one more mether ot do that 
meke a objact  in a fome of css and then add it in html + js*/
// eg:
/*
const custamestyle ={
  colour: "red"
  font-size:"20px"
  border :"1px solide black"
} 
ReactDOM.render(
  <h1 style={custamestyle}>Hello World!</h1>,
  document.getElementById("root")
);
*/
