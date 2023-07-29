import React,{useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked "+text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase","Success")
    // setText("You have clicked on handle upclick");
  }
  const handleLowClick = ()=>{
    // console.log("UpperCase was clicked "+text);
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase","Success")
    // setText("You have clicked on handle upclick");
  }
  const handleclearClick = ()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("Cleared","Success")
  }
  const handlevowelClick = ()=>{
    let c=text.match(/[aeiouAEIOU]/gi).length;
    let newstr=c.toString();
    setText(newstr);
  } 
  const handlereverseClick = ()=>{
   let chararr=text.split("");
   chararr=chararr.reverse();
   let newstr=chararr.join("");
    setText(newstr);
  } 
  const handleOnChange = (event)=>{
    // console.log("Handled On change");
    setText(event.target.value)
  }
  const handlecopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to clipboard","Success");
  }
  const [text,setText]=useState('');
  // const [countvo,setCount]=useState(0);
  
  // text="new text"wrong way to chnage the text
  // setText("ajcjdcjd jd");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#141234'}}>
      <h1>{props.heading}</h1>
      <div className="mb-7 my-3 mx-2 border 3px solid blue" >
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#141234'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>
        convert To UpperCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>
        convert To LowerCase
      </button> 
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleclearClick}>
        clear 
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlevowelClick}>
        count vowels 
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlereverseClick}>
        reverse
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlecopy}>
        Copy
      </button>
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#141234'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/[" "\n]/).filter((element)=> { return  element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=> { return  element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}