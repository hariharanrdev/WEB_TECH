/*
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
*/

/*

//!unmounting.

import React, { Component } from 'react'

class ChildComponentA extends Component {
  componentWillUnmount(){
    console.log("I am unmounting...");
  }
  render() {
    console.log("I am Mounting");
    return (
      <>
      <h2>I am Child Component</h2>
      </>      
    );
  }
}
export default ChildComponentA;
*/

// ! useEfect () Hook

import {useEffect} from "react";
let ChildComponent = () => {
  useEffect(()=>{
    console.log("I am Mounting Phase");
    return ()=> {
      console.log(I am unmounting phaase);
    };
  })
}