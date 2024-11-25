"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./page.css";

// import styles from "./page.module.css";

export default function Home() {
  const navigate = useRouter();

  // const navigation = () => {
  //   navigate.push("/about");
  // };
  const navigation = (path) => {
    navigate.push(path);
  };
  return (
    <div className="para">
      <h1 className="heading-clr">Learning NEXT.JS</h1>
      <h2>Nested Routing</h2>
      <Link href="/login">Go to login page</Link>
      <br />
      <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <br />
      {/* <button onClick={() => navigate.push("/login")}>Go to Login page</button> */}
      <button onClick={() => navigation("/login")}>Go to Login page</button>

      <button
        onClick={() => {
          navigation("/about");
        }}
      >
        Go to about page
      </button>
    </div>
  );
}
