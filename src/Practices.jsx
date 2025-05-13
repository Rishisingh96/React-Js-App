import { Fragment } from "react";

export const Practices = () => {
  // return <h1>Interview Question</h1>;
  const students = [21];
  console.log(Boolean(students.length));
  console.log(students.length);
  return (
    <Fragment>
      {/* <p>{students.length && "No Student found"}</p> */}

      {/* 1st way */}
      {/* <p>{students.length === 0 && "No Student found"}</p> */}

      {/* 2nd way */}
      {/* <p>{!students.length && "No Student found"}</p> */}

      {/* 3rd way */}
      <p>{Boolean(!students.length) && "No Student found"}</p>
      <p>Number of Students: {students.length}</p>
    </Fragment>
  );
};
