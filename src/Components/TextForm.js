import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase Was Clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success ")
  }
  
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success ")
  }
  const handleClearClick = ()=>{
    let newText = " ";
    setText(newText)
    props.showAlert("Text has been Cleard", "success ")
  }
  // const handleLocalLowClick = ()=>{
  //   let newText = text.toLocaleLowerCase;
  //   setText(newText)
  // }

  const handleOnChange = (event)=>{
    // console.log("On Change")
    setText(event.target.value)
  }
  const[text,setText] = useState('');
  // setText("New Text");
  return ( 
<>
<div className="container" style={{color: props.mode==='dark'?'black':'white'}}>
  <h1 className='mb-4'>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value ={text} onChange ={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#562020':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
  </div>
  <button className="btn btn-success mx-2 my-2" onClick = {handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-success mx-2 my-2" onClick = {handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-success mx-2 my-2" onClick = {handleClearClick}>Text Clear</button>
  {/* <button className="btn btn-outline-success mx-2" onClick = {handleLocalLowClick}>Locale Lower Case Case</button> */}
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'black':'white'}}>
  <h2>your text summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words And {text.length} charecters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Somthing Text for Showing the review on here"}</p>
</div>
</>
  )
}
