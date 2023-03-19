import { NavLink } from "react-router-dom";
import SearchForm from "../video/SearchForm";
import yt from "../../assets/purpleyt.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navi = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <img className="logo" src={yt} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/">
            HOME
          </NavLink>
          <NavLink className="nav-link" to="/about">
            ABOUT
          </NavLink>
        </Nav>
        <SearchForm />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
