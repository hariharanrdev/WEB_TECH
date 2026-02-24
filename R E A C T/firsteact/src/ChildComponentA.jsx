import React from 'react';
import Hoc from "./Hoc";

const ChildComponentA = (props) => {
  const { name, course, instituteLoc, instituteName } = props;
  return (
    <>
    <h2>I am ChildComponentA</h2>
    <p>Name: {name}</p>
    <p>Course: {course}</p>
    <p>InstituteLoc: {instituteLoc}</p>
    <p>InstituteName: {instituteName}</p>

    </>
  );
};

export default Hoc(ChildComponentA);