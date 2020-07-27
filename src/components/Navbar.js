import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            <i className="fa fa-bell-o text-white" aria-hidden="true" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            <i className="fa fa-sign-out text-white" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
