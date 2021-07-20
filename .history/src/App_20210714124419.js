import React,{useState} from "react";
import Button from "./components/UI/Button";
import "./App.css";

function App() {
  const[showParagraph,setShowParagraph]=useState(false);

  const toggleParagraphHandler=()=>{
setShowParagraph((prevshowParagraph)=>);
  }
  return (
    <div className="app">
      <h1> Hi there! </h1>
      {showParagraph && <p>This is new Paragraph</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;