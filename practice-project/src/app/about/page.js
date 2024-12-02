import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1 className="heading"> About Page</h1>
      <Link href="/">Go to home page</Link>
      <br />
      <Link href="/about/aboutstudent">About Student</Link>
      <Link href="/about/aboutcollege">About College</Link>
    </div>
  );
};

export default AboutPage;
