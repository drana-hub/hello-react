// Inline styling needs a javascript object
// if we need to use the js object in style prop , we need to put it inside {}

import constants from "../utils/constants";

const ResCard = (props) => {
  console.log(props);
  let { resName, cuisine, rating } = props;

  return (
    <div className="resCard">
      <img className="res-image" src={constants.resImage} />
      <h3>{resName}</h3>
      <h4>{cuisine ? cuisine : "Not Found"}</h4>
      <h5>30 min</h5>
      <h5>{rating}</h5>
    </div>
  );
};

export default ResCard;
