"use client";
import "../../page.css";

const Student = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Student Details</h1>
      <p>Name of student:{params.student}</p>
    </div>
  );
};

export default Student;
