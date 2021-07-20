import React from "react";

const M = (props) => {
    console.log('M RUNNING');
    return <p > { props.show ? "This is new Paragraph" : "" } < /p>;
};

export default My;