"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const navigate = useRouter();
  return (
    <div>
      <h1 className="heading">login page</h1>
      <Link href="/">Go to homepage</Link>
      <br />
      <br />
      {/* <Link href="login/studentlogin">Student Login</Link> */}
      <br />
      <br />
      {/* <Link href="login/stafflogin">Staff Login</Link> */}
      <br />
      <button onClick={() => navigate.push("/login/studentlogin")}>
        Go to student login page
      </button>
    </div>
  );
};

export default LoginPage;
