import React,{useState} from "react";
import Button from "./components/UI/Button";
import "./App.css";

function App() {
  const[showParagraph,setParagraph]=useState(false);

  const toggleParagraphHandler()=>{

  }
  return (
    <div className="app">
      <h1> Hi there! </h1>
      {showParagraph} && <p>This is new Paragraph</p>
      
    </div>
  );
}

export default App;
