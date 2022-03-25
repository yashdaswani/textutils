import React,{useState} from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase()
        setText(newtext);
    }
    const handlelowclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }

    const handlespaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handlecopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRange();
    }

    const handleclear=()=>{
        let newText="";
        setText(newText);
    }

    const handleCapitalize=()=>{
         const words = text.split(" ");
         for (var i = 0; i < words.length; i++) {
         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
        let mytext=words.join(" ");
        setText(mytext);
    }

    const handleInverse=()=>{
        for(let i=0;i<text.length;i++)
        {
            if(text[i]===text[i].toUpperCase)
            {
                text[i]=text[i].toLowerCase;
            }
            else{
                text[i]=text[i].toUpperCase;
            }
        }
        setText(text);
    }
    //remove all the symbols
    const handletextExtract =()=>{
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join('');
    setText(res1)
    };

    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
      };

      function DownLoadFile(filename, NewText) {
        const element = document.createElement("a");
    
        //A blob is a data type that can store binary data
        // "type" is a MIME type
        // It can have a different value, based on a file you want to save
        const blob = new Blob([NewText], { type: "plain/text" });
    
        //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
        const fileUrl = URL.createObjectURL(blob);
    
        //setAttribute() Sets the value of an attribute on the specified element.
        element.setAttribute("href", fileUrl); //file location
        element.setAttribute("download", filename); // file name
        element.style.display = "none";
    
        //use appendChild() method to move an element from one element to another
        document.body.appendChild(element);
        element.click();
    
        //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
        document.body.removeChild(element);
      }
      const DownloadText = () => {
        let fileName = "your.txt";
    
        DownLoadFile(fileName, text);
      };

    
    const[text,setText]=useState("Enter the text")
  return (
      <>
      <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading} </h2>
      <textarea className="form-control"    value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#626770':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleupclick}>Convert To Uppercase</button>
      <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handlelowclick}>Convert To Lowercase</button>
      <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handleclear}>Clear Text </button>
      <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handlecopy}>Copy To Clipboard</button>
      <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handlespaces}>Remove Extra Spaces</button>
      <button className='btn btn-primary mx-2'  disabled={text.length===0}onClick={handleCapitalize}>Capitalize</button>
      {/* <button className='btn btn-primary mx-2' onClick={handleInverse}>Inverse</button> */}
      <button className='btn btn-primary mx-2' disabled={text.length===0} onClick={handletextExtract}>Remove All Symbols</button>
      <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleReverse}>Reverse</button>
      <button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={DownloadText}>DownLoadFile</button>

      <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>Text Summary</h2>
          <div>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</div>
          <div>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</div>
          <h2 className="my-2">Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
</>
  )
}

