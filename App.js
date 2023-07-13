import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

const title = (
    <h1> hey </h1>
)

const title2 = <div>hiiii</div>

root.render(title)
root2.render(title2)
