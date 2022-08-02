import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUPclick =() =>{
     let newtext = text.toUpperCase()
     setText(newtext)
     props.showalert("converted to uppercase", "success")
    }
const handleonchange =(event)=>{
setText(event.target.value)
}
const lowercase = ()=>{
    let lowertext = text.toLocaleLowerCase();
    setText(lowertext)
    props.showalert("converted to lower case", "primary")
}
const Copy = ()=>{
    let copytext = document.getElementById("my-box")
    copytext.select()
    navigator.clipboard.writeText(copytext.value)
    props.showalert("Text has been copied", "success")
}
const cleartetxt =()=>{
  let clear = ""
  setText(clear)
  props.showalert("Text has been cleared", "success")
}
  return (
    <>
    <div className='conatiner' style={{color: props.mode==="light"?"#042743":"white"}}>
    <h2>{props.heading}</h2>
      <div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleonchange} style= {{backgroundColor:props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#042743"}} id="my-box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUPclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={lowercase}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2 my-3" onClick={Copy}>Copytext</button>
<button className="btn btn-primary mx-2 my-3" onClick={cleartetxt}>Clear</button>
    </div>
    <div className="conatiner my-3" style={{color: props.mode==="light"?"#042743":"white"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p> 
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to the textbox to preview it here"}</p>
    </div>
    </>
  )
}
