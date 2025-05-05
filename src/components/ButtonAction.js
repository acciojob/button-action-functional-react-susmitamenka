import React, { useState } from "react";

const ButtonAction =()=>{
let [showParagraph,setShowParagraph]=useState(false)
    function task(){
        setShowParagraph(true)
    }
    return(
        <div>
            <button id="click" onClick={task}>click</button>
            {showParagraph&&(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>)}
        </div>
    )
}
export default ButtonAction