import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/user/anil" state={{name: "suraj", age: 45}}>Anil</Link>
      </li>
      <li>
        <Link to="/user/peter">Peter</Link>
      </li>
      <li>
        <Link to="/filter">Filter</Link>
      </li>
    </ul>
  );
};

export default Navbar;
