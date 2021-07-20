import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph RUNNING");
  return <p> {props.} </p>;
};

export default MyParagraph;
