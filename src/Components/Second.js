import React, { useState } from "react";

export default function Second(props) {
  const [text, setText] = useState("Enter text here");
  function upper() {
    console.log("Upper");
    setText(text.toUpperCase())
    props.showAlert("Text converted to uppercase","success");
  }
  function lower() {
    setText(text.toLowerCase())
  }
  function handleOnChange(event){
    setText(event.target.value);
  }
  return (
    <>
      <h1 className="text-center my2">{props.head}</h1>
      <div className="container mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Textarea
        </label>
        <textarea
          className={`form-control`}
          id="exampleFormControlTextarea1"
          rows="3"
          style={{backgroundColor : props.mode === 'light'?'white':'#612d59',
          color : props.mode === 'light'?'black':'white'}}
          value={text}
          onChange={handleOnChange}
        >
        </textarea>
        <button type="button" onClick={upper} className="btn btn-primary mx-1 my-1">
          UpperCase
        </button>
        <button type="button" onClick={lower} className="btn btn-primary mx-1 my-1">
          LowerCase
        </button>
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Chars</p>
      </div>
    </>
  );
}
Second.defaultProps = {
    head: "stranger",
  };
  
