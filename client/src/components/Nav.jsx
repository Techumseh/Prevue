import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <Link to="/" id="nav-link">
        <h1>Prevue</h1>
      </Link>
    </div>
  );
};

export default Nav;