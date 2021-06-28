import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import './About.css'
const About_Form = () => {
    const[selectedFont, setSelectedFont] = useState('cursive')
    const[fontColor, setFontColor] = useState('Black')
    const[Designation, setDesignation] = useState('test123')

    const resetAll = () => {
        setDesignation('')
        setFontColor('Black')
        setSelectedFont('cursive')
    }

    const saveAbout = () => {
        
    }


    return (
        <>
            
                <h1>About</h1>
                <div className="abform">
                    <div className="inputside">
                        <div className="inputside-editopt">
                            <div className="inputside-fontselect">
                                <p>Choose Font</p>
                                <select id="aboutselect" value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
                                    <option value="cursive">cursive</option>
                                    <option value="Courier New">Courier New</option>
                                    <option value="Brush Script MT">Brush Script MT</option>
                                    <option value="	Times New Roman">Times New Roman</option>
                                </select>
                            </div>
                            <div className="inputside-fontcolor">
                                <p>Choose Input Color</p>
                                <input id="aboutcolor" type="text" value={fontColor} placeholder="Enter Color" onChange={(e) => setFontColor(e.target.value)}/>
                            </div>    
                        </div>
                        
                        <div className="inputside-txtarea">
                            <p>Edit/Add Decription</p>
                            <textarea style={{fontFamily: selectedFont, color: fontColor}} id="abouttxa" value={Designation} type="text" placeholder="Enter About" onChange={(e)=> setDesignation(e.target.value)}/>
                        </div>
                        <div className="input-buttons">
                            <button id="savebtn" onClick={saveAbout}>SAVE</button>
                            <button id="resetbtn" onClick={resetAll}>RESET</button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default About_Form