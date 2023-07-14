import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid blue",
      }}
    >
      <img
        className="logo"
        src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1060&t=st=1689250853~exp=1689251453~hmac=52fcaff8c56764a745b478631ea7793678b8f73eea4bab9c7f71d6e257068f73"
      />
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart Icon</li>
        </ul>
      </nav>
    </div>
  );
};

// Inline styling needs a javascript object
// if we need to use the js object in style prop , we need to put it inside {}

const ResCard = ({ resName, cuisine }) => {
  {
    console.log(resName, cuisine);
  }
  return (
    <div className="resCard">
      <img
        className="res-image"
        src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=651%2Cq=70%2Csharpen=1%2Cwidth=1400/wp-content/uploads/national-fast-food-day.jpg"
      />
      <h3>{resName}</h3>
      <h4>{cuisine ? cuisine : "Not Found"}</h4>
      <h5>30 min</h5>
      <h5>4.0*</h5>
    </div>
  );
};

const Body = () => {

  return (
    <div className="body">
      <div className="search">Search Option</div>
      <div className="res-container">
        {/* {[1, 2, 3, 4, 5].map((e, index) => (
          <ResCard key={e} resName={e} />
        ))} */}
        {[<ResCard key={2} resName={2} />]}
        {<ResCard key={2} resName={2} />}
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

root.render(<AppComponent />);
