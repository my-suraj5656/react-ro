import React from "react";
import { Link, Outlet } from "react-router-dom";
import Company from "./Company";
import Others from "./Others";
import Channel from "./Channel";

const About = () => {
  return (
    <>
    <h1>About</h1>
    <ul>
      <li>
        <Link to="company" element={<Company/>}>Company</Link>
      </li>
       <li>
        <Link to="others" element={<Others/>}>Others</Link>
      </li>
       <li>
        <Link to="channel" element={<Channel/>}>Channel</Link>
      </li>
    </ul>
    <Outlet/>
    </>
  );
};

export default About;
