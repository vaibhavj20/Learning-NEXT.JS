"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Vaibhav");
  const greet = () => {
    // alert("Hello,Welcome to the world of Next.js");
    setName("Satish");
  };

  const InnerCompo = () => {
    return <div>Inner Component</div>;
  };

  return (
    <div className={styles.page}>
      <h1>Learning NEXT.JS</h1>
      <h2>MySelf {name}</h2>
      <h2>Functions,Events and States</h2>
      <button onClick={greet}>Click Me</button>
      {/* <InnerCompo /> */}
      {InnerCompo()}
    </div>
  );
}
