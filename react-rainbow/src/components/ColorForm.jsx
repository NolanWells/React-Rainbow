import e from "express";
import React, {useState} from "react";

export default function ColorForm(props) {
    let [inputColor, setInputColor] = useState('');
    
    const onSumbmit = e =>{
        e.preventDefault();
        let { addToColors }  = props;
        if(inputColor) {
            addToColors(inputColor)
        }
       
    }

    return <div className="color-form">
        <form onSubmit={ onSumbmit }>
            <input type="text" 
                onChange={ e => setInputColor(e.target.value) }
            />
            <button type="submit">Submit!</button>
        </form>
    </div>
}