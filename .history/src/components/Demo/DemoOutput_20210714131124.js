import React from "react";

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
  return <p>{props.show ? "This is new Paragraph" : ""}</p>;
};

export default DemoOutput;
