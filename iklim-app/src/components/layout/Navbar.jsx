import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <p>@Naandalist</p>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "iklim app",
  icon: "fa fa-cloud"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
