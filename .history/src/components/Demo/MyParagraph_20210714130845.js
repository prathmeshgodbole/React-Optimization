import React from "react";

const My = (props) => {
    console.log('My RUNNING');
    return <p > { props.show ? "This is new Paragraph" : "" } < /p>;
};

export default My;;