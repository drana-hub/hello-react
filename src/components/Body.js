import { useState, useEffect } from "react";
import ResCard from "./resCard";

export const Body = () => {
  const arr1 = useState([1, 2, 3, 4, 5]);
  const arr2 = useState(0);

  // const dataList = arr1[0];
  // const setDataList = arr1[1]
  // these are the same things
  const [dataList, setDataList] = arr1;
  const [count, setCount] = arr2;



  //   useEffect(() => {
  //     setDataList(dataList.filter((d) => d < 6 - count));
  //   }, [count, dataList]);

  // this is not the correct way to modify it as it is a state variable and const as well
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
            setCount((count % 5) + 1);
            setDataList(dataList.filter((d) => d < 5 - count));
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
