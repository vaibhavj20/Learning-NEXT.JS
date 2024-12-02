import React from "react";
import Link from "next/link";
import "./about.css";

const Aboutlayout = ({ children }) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4>About Navbar</h4>
        </li>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">About Student</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">About College</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Aboutlayout;
