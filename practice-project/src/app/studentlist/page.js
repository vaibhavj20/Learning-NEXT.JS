import React from "react";
import "../page.css";
import Link from "next/link";

const StudentList = () => {
  const student = ["Vaibhav", "Satish", "Yogesh", "Nilesh"];

  return (
    <div>
      <h1>StudentList</h1>

      {student.map((stud) => (
        <ul>
          <li>
            <Link href={`/studentlist/${stud}`}>{stud}</Link>
          </li>
        </ul>
      ))}
      {/* <ul>
        <li>
          {" "}
          <Link href="/studentlist/vaibhav">Vaibhav</Link>
        </li>
        <li>
          {" "}
          <Link href="/studentlist/satish">Satish</Link>
        </li>
        <li>
          {" "}
          <Link href="/studentlist/yogesh">Yogesh</Link>
        </li>
        <li>
          {" "}
          <Link href="/studentlist/nilesh">Nilesh</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default StudentList;
