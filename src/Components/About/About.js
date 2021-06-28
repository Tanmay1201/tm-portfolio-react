import { useState } from 'react'
import './About.css'
import Typewriter from 'typewriter-effect';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const About = () => {
    const[name, setName] = useState('Tanmay Mathur')
    const[Designation, setDesignation] = useState('UNDERGRAD, COMPUTER SCIENCE, RAJASTHAN TECHNICAL UNIVERSITY')
    const[description, setBriefDescription] = useState('Test')
    
    return (
        <div className="top">
            <ArrowBackIosIcon className="aboutB" />
            <div className="super">
                <div className="Detail">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.changeDelay(200)
                            .typeString('<span style="color: white;">' + description + '</span><br />')
                            .pauseFor(300)
                            .typeString('<span style="color: blue;">' + Designation + '</span>')
                            
                            .start();  
                        }}
                    />
                </div>
            </div>
            <ArrowForwardIosIcon className="aboutF" />
        </div>
    )
}

export default About