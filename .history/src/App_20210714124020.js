import React,{useState} from "react";
import Button from "./components/UI/Button";
import "./App.css";

function App() {
  const[showParagraph,setPara]=useState(false);
  return (
    <div className="app">
      <h1> Hi there! </h1>
      <p>This is new Paragraph</p>
    </div>
  );
}

export default App;
