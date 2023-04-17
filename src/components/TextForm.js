import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");
  // text = "Hye Im Ayushi";  //This is wrong way of updating text instead we useState funct i.e setText
  // setText("This is new Text");  //Correct way to change the text

  const handleUpClick = () => {
    console.log("On click Upper called");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };
  const handleLowClick = () => {
    console.log("On Click Lower called");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleSymClick = (e) => {
    let c = 0;
    let str = "s";
    let ind = text.indexOf(str);
    while (ind !== -1) {
      c++;
      ind = text.indexOf(str, ind + 1);
    }
    console.log(c);
    let newtext=text;
    for (let i = 0; i < c; i++) {
      console.log(i,newtext);
       newtext=newtext.replace(str,"$");
       setText(newtext);
    }
    props.showAlert("Converted to symbols", "success");
    // let newtext="";
    // for(let i=0;i<text.length;i++){
    //     if(text[i]=="s"){
    //         newtext+="$";
    //     }
    //     else{
    //         newtext+=text[i];
    //     }
    // }
    // setText(newtext);

  };
  const handleCopyClick = (e) => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleClearClick = (e) => {
    if(text){
      setText("");
    }
    props.showAlert("Clear", "success");
  };
  const handleRemoveSpacesClick = (e) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'#25e9f2': 'black'}}>
      <h2>{props.heading}</h2>

      <div className="mb-3" style={{backgroundColor: props.mode === 'dark'?'black': 'white'}}>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Upper
      </button>
      <button className="btn btn-success mx-2" onClick={handleLowClick}>
        Convert to Lower
      </button>
      <button className="btn btn-danger mx-2" onClick={handleSymClick}>
        Convert to Symbols
      </button>
      <button className="btn btn-info mx-2" onClick={handleCopyClick}>
        COPY
      </button>
      <button className="btn btn-warning mx-2" onClick={handleRemoveSpacesClick}>
        Remove Spaces
      </button>
      <button className="btn btn-dark mx-2" onClick={handleClearClick}>
        CLEAR
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'#25e9f2': 'black'}}>
      <h2>Your Text Summary</h2>
      <p><b>{text.split(" ").filter(word => word !== '').length}</b> words and <b>{text.length}</b> characters</p>
      <p><b>{0.008 * text.split(" ").length}</b> minutes taken to read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Enter text to preview here"}</p>
    </div>
    </>
  );
}
