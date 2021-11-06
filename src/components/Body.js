import React, { useState, useEffect } from 'react'
import sidehustle from '../assets/sidehustle.png'

function Body() {

    // Setting states
    const [text, setText] = useState('');
    const [isTextEnter, setIsTextEnter] = useState(false);

    // Handle states with onChange 
    const handleChange = e => {
        setText(e.target.value)
        
    }

    useEffect(() => {
        if(text.length >= 1){
            setIsTextEnter(true)
        }
        if(text.length < 1) { 
            setIsTextEnter(false)
        }
    }, [ text, isTextEnter ])

    return (
        <div style={BodyStyle}>
            { isTextEnter ? <p style={{margin:"100px"}}> { text } </p> : <img className="logo"  src={sidehustle} alt="Sidehustle" /> }
            <input className='input' type="text" onChange={handleChange} value={text} />
            <div className="btns">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <div className="languages">
                Google offered in: <a href="/#" >Hausa</a> <a href="/#" >Igbo</a> <a href="/#" >Èdè Yorùbá</a>  <a href="/#" >Nigerian Pidgin</a> 
            </div>
        </div>
    )
}

export default Body

const BodyStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginBottom:"50px"
}

    