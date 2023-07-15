import constants from '../utils/constants'
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
        src= {constants.logoImage}
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

export default Header;
