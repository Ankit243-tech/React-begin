import React from "react";
import ReactDOM from "react-dom";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "you are here");
console.log(heading);



// console.log(JSXheadingheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
