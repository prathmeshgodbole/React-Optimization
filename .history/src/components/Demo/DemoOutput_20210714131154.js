import React from "react";

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show ? "This is new Paragraph" : ""}</MyParagraph>;
};

export default DemoOutput;
