import React from 'react';
import Hoc from "./Hoc";

const ChildComponentB = (props) => {
  const { name, course, instituteLoc, instituteName } = props;
  return (
    <>
    <h2>I am ChildComponentB</h2>
    <p>Name: {name}</p>
    <p>Course: {course}</p>
    <p>InstituteLoc: {instituteLoc}</p>
    <p>InstituteName: {instituteName}</p>

    </>
  );
};

export default Hoc(ChildComponentB);