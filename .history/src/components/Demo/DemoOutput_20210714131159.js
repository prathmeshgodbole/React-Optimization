import React from "react";
import My
const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show ? "This is new Paragraph" : ""}</MyParagraph>;
};

export default DemoOutput;
