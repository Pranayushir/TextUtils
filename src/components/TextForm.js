import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.handleAlert("Text coverted to UpperCase !!!","success");
        
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.handleAlert("Text coverted to LowerCase !!!","success");
    }
    const handleCopy = ()=>{
        let newText = text;
        navigator.clipboard.writeText(newText);
        props.handleAlert("Copied to Clipboard !!!","success");
    }

    const handleClear = ()=>{
        setText("");
        props.handleAlert("Text Cleared !!!","success");
    }

    const handleRemove = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.handleAlert("Extra spaces removed !!!","success");
    }
  
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    
    function countwords() {
        // const re = /[ ]+/;
        return text.split(/\s+/).filter((element)=>{return element.length !==0}).length;
    }

    function handlePreview() {
        if(countwords()===0){
            return "Please Enter the text to preview!!!"
        }
        else{
            return text;
        }
    }

    const [text,setText] = useState("");
    return (
        <>
            <div  className="container my-2" style={{color : props.mode === "light"?'black':"white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" id="myform" rows="8" value={text} style={{backgroundColor : props.mode === "light"?'white':"rgb(33 37 41)" , color: props.mode === "light"?'black':"white" }} onChange={handleChange}></textarea>
                </div>
                <button disabled={text.length ===0} className='btn btn-dark mx-1' onClick={handleUpClick}>convert to uppercase</button>
                <button disabled={text.length ===0} className="btn btn-dark mx-1" onClick={handleLowClick}>convert to lowercase</button>
                <button disabled={text.length ===0} className="btn btn-dark mx-1" onClick={handleRemove}>Remove extra spaces</button>
                <button disabled={text.length ===0} className="btn btn-dark mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length ===0} className="btn btn-dark mx-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className='container' style={{color : props.mode === "light"?'black':"white"}}>
                <h2>Text summary</h2>
                <p><b>{countwords()}</b> words and <b>{countwords()!==0 ?text.length:0}</b> characters</p>
                <p>Time to read text is {0.008*countwords()} Minutes</p>
                <h2>Text Preview</h2>
                <p>{handlePreview()}</p>
            </div>
        </>
  )
}
