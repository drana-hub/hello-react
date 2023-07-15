import React from "react"; // this is a default import
import ReactDOM from "react-dom/client";
import Header from "./src/components/header";
import {Body} from "./src/components/Body";


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

const AppComponent = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

root.render(<AppComponent />);
