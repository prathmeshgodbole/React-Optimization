import React from "react";

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
  return <My>{props.show ? "This is new Paragraph" : ""}</My>;
};

export default DemoOutput;
