"use client";
import Link from "next/link";
import React from "react";
import "./login.css";
import { usePathname } from "next/navigation";

const LoginLayout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      {pathName !== "/login/stafflogin" ? (
        <ul className="login-menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/studentlogin">Student Login</Link>
          </li>
          <li>
            <Link href="/login/stafflogin">Staff Login</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
};

export default LoginLayout;
