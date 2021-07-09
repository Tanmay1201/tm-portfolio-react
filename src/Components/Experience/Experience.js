import './Experience.scss'
import metacube from "./metacube.png"
import jpmc from "./jpmclogo.jpg"
import ct from './ctlogo.png'
import linkedinicon from "./linkedin.png"
import companyicon from "./company.png"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typewriter from '../Common/TypeWriterEffect'
import {
    useHistory
  } from "react-router-dom";
import { useState } from 'react';

const Experience = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    let data = [
        {
            companyName: "JP Morgan Chase and Company",
            logopath:  jpmc,
            companyurl: 'https://www.jpmorganchase.com/',
            linkedinurl: 'https://www.linkedin.com/company/jpmorganchase/',
            details: '::: Working as a Full Stack Developer in Corporate & Investment Banking Research & Analytics Team.' + 
                     '<br>::: Indulged in buidling highly scalable web applications for 10+ Million customers using React and Java.' + 
                     '<br>::: Responsible for delivering end to end functionalties by following best practices which including Requirement Gathering, analyzing, building, deployment and maintainance.' +
                     '<br>::: Using DevOps tools like Kubernetes and Docker for safe deployment and maintainance, and Jenkins for building CI/CD pipelines.' 

        },
        {
            companyName: "Metacube Software Pvt. Ltd",
            logopath:  metacube,
            companyurl: 'http://www.metacube.com',
            linkedinurl: 'https://www.linkedin.com/company/metacube/mycompany/',
            details: '::: Working as a UI Developer on SFCC to help brands in digital transformation to use rich capabilities on Salesforce ECommerce Cloud.' +  
                    '<br>::: Indulged in building reusable code and libraries using ReactJS for future use, translation of UI/UX wire-frames to visual elements, integration of the front-end and back-end aspects of the web application.' + 
                    '<br>::: Worked closely with project managers to analyze business requirements and convert them into technical details.' + 
                    '<br>::: Experience in Agile Software Development Methodology, specially scrum.'
        },
        {
            companyName: "Celebal Technologies Pvt. Ltd",
            logopath:  ct,
            companyurl: 'http://celebaltech.com/',
            linkedinurl: 'https://www.linkedin.com/company/celebaltechnologies/',
            details: '::: Developed and maintained automated CI/CD pipelines for code deployment using Jenkins.' + 
                     '<br>::: Maintained Git workflows for version control(Source Code Management).' + 
                     '<br>::: Built and deployed Docker containers for implementing Microservice Architecture from Monolithic Architecture.'
        }
    ]

    const changeSlide = value => {
        if(value === true) {
            if(currentIndex === data.length-1)
            {
                setCurrentIndex(0)
            }
            else
            {
                setCurrentIndex(currentIndex+1)
            } 
            
        }
    }

    const handleScroll = (e) => {
        if (e.target.classList !== undefined)
         {
             if(e.target.classList.contains("on-scrollbar") === false) {
                e.target.classList.add("on-scrollbar");
            }
        }
    }

    window.addEventListener('scroll', handleScroll, true);

    return (
        <>
            <div className="experience">
                <span id="exptag">Experience</span>
                        <div className="exp-outerstruct">
                            <ArrowBackIosIcon id="exp-outerstruct-backicon" onClick={() => currentIndex === 0 ? setCurrentIndex(data.length-1) : setCurrentIndex(currentIndex-1)}/>
                            <div className="experience-companies">
                                <div className="companies-companydetails">
                                        <div className="webs">
                                            <img src={data[currentIndex].logopath} id="logo" />
                                            <div className="socials">
                                                <img id="company" src={companyicon} style={{ height:"20px", width:"20px" }} onClick={() => window.open(data[currentIndex].companyurl, "_blank")}/>
                                                <img id="linkedin" src={linkedinicon} style={{ height:"20px", width:"20px", marginTop:"5px" }} onClick={() => window.open(data[currentIndex].linkedinurl, "_blank")}/>
                                            </div>
                                        </div>
                                        
                                        <b><p id="companyname">{data[currentIndex].companyName}</p></b>
                                </div>
                                <div className="companies-jd" >
                                    <Typewriter string={data[currentIndex].details} onCompleted={(value) => changeSlide(value)}/>
                                </div>
                                
                            </div>
                            <ArrowForwardIosIcon id="exp-outerstruct-fronticon" onClick={() => currentIndex === data.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1)}/>
                        </div>
                        <div className="ball1" onScroll={handleScroll} style={{marginTop:"10px"}}>
                            {
                                data.map((element, index) => (
                                    index == currentIndex ? <div className="testdiv" style={{backgroundColor:"grey"}}/> : <div className="testdiv"/>
                                    
                                ))
                            }
                        </div>
            </div>
                
            
                
        </>
    )
}

export default Experience;