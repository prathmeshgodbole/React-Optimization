import React from "react";

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
  return <p>{props.children}</p>;
};

export default DemoOutput;
