import { useState } from "react";
import ResCard from "./resCard";

// if my dataList has changed ,
// react is fast/ efficient in Dom-manipulation
// if we have to keep our data and UI layer consistent to each other, that is where all frameworks come in picture
// if my data changes, my Ui should update accordingnly
// so react is fast bcz it can do faster/efficient DOM manipulation
// virtual Dom - diff algorithm - reconciliation

// to bind the data to the UI, react gives us superpower

// Q- What are hooks in react?
// a hook is a normal js function given to us by react
// that function is a utility function given by react, written by fb developers
// they are written in React

// 2 very imp hooks - useState, useEffect (99%)
// useState gives super powerful state variables in react
// it is a named import from react
// it is used to create a state variable, i.e, a variable which can handle state of our app

export const Body = () => {
  //superpowerful variable, i.e, a state variable in react
  // to create a state variable , we use hooks in react, i.e, useState hook

  //useState(defaultVAlue) of the state variable
  // since the way of creating a state variable is a different,
  // way of modifing it will also be different
  // set function is not mandatory to be given
  const [dataList, setDataList] = useState([1, 2, 3, 4, 5]);
  let updatedList = dataList.filter(d => d>2)
  setDataList(updatedList);

  // this is not the correct way to modify it as it is a state variable
  //   setDataList = () => {
  //     dataList = dataList.filter((d) => d > 2);
  //   }
  return (
    <div className="body">
      <div className="search">
        Search Option
        {
          // onClick has to be equal to function , which gets executed on this event
        }
        <button
          className="filter-btn"
          onClick={() => {
            setDataList
          }}
          onMouseOver={() => {
            console.log("hovering");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {dataList.map((e, index) => (
          <ResCard key={index} resName={e} cuisine="same" rating={e} />
        ))}
        {/* {[<ResCard key={2} resName={2} />]}
        {<ResCard key={2} resName={2} />} */}
      </div>
    </div>
  );
};

export default Body;
