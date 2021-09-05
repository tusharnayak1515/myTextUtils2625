import React, { Fragment, useState } from 'react';

import styles from './textForm.module.css';

const TextForm = ({mode}) => {

    const [text, SetText] = useState("");

    const onTextChange = (event)=> {
        SetText(event.target.value);
    }

    const onUpClick = ()=> {
        SetText(text.toUpperCase());
    }

    const onLowClick = ()=> {
        SetText(text.toLowerCase());
    }

    const onTrimClick = ()=> {
        let trimmedText = text.split(/[ ]+/);
        SetText(trimmedText.join(" "));
    }

    const onCopyClick = ()=> {
        let myText = document.getElementById("myText");
        myText.select();
        navigator.clipboard.writeText(myText.value);
        alert("Copied to Clipboard.")
    }

    const onClearClick = ()=> {
        SetText("");
    }

    let isDarkMode;
    
    if(mode === "dark") {
        isDarkMode = true;
    }
    else {
        isDarkMode = false;
    }

    let isEmpty;

    if(text === "") {
        isEmpty = true;
    }
    else {
        isEmpty = false;
    }

    return (
        <Fragment>
            <div id={styles.textForm_container}>
                <h1 style={{color: isDarkMode ? "white" : "black"}}>Enter the text to analyze below</h1>
                <textarea 
                    name="text" 
                    id="myText" 
                    cols="75" rows="5" 
                    placeholder="Enter your text here..." 
                    value={text} 
                    onChange={onTextChange} 
                    style={{border: isDarkMode ? "0.15vw solid white" : "0.15vw solid black", backgroundColor: isDarkMode ? "rgb(80, 79, 79)" : "white", color: isDarkMode ? "white" : "black"}}>
                </textarea>
                <div id={styles.utilityBtns}>
                    <button type="button" onClick={onUpClick} style={{color: isDarkMode ? "white" : "black"}} disabled={isEmpty} >UpperCase</button>
                    <button type="button" onClick={onLowClick} style={{color: isDarkMode ? "white" : "black"}} disabled={isEmpty} >LowerCase</button>
                    <button type="button" onClick={onTrimClick} style={{color: isDarkMode ? "white" : "black"}} disabled={isEmpty} >Trim Text</button>
                    <button type="button" onClick={onCopyClick} style={{color: isDarkMode ? "white" : "black"}} disabled={isEmpty} >Copy Text</button>
                    <button type="button" onClick={onClearClick} style={{color: isDarkMode ? "white" : "black"}} disabled={isEmpty} >Clear Text</button>
                </div>
            </div>

            <div id={styles.output_container}>

                <div id={styles.summary}>
                    <h1 style={{color: isDarkMode ? "white" : "black"}}>Your Text Summary</h1>
                    <p style={{color: isDarkMode ? "white" : "black"}}>{`${text.split(/\s/).length} words and ${text.length} characters`}</p>
                </div>

                <div id={styles.preview}>
                    <h1 style={{color: isDarkMode ? "white" : "black"}}>Preview</h1>
                    <p style={{color: isDarkMode ? "white" : "black"}}>{text.length >0 ? text : "Enter text above to get the preview..."}</p>
                </div>

            </div>
        </Fragment>
    )
}

export default TextForm;
