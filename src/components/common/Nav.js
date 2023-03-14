import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <h3>HOME</h3>
        </NavLink>
        <NavLink to="about">
          <h3>ABOUT</h3>
        </NavLink>
        <NavLink to="video">
          <h3>View Video</h3>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
