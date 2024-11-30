import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>This is login page</h1>
      <Link href="/">Go to homepage</Link>
      <br />
      <br />
      <Link href="login/studentlogin">Student Login</Link>
      <br />
      <br />
      <Link href="login/stafflogin">Staff Login</Link>
    </div>
  );
};

export default LoginPage;
