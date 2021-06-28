import { useState } from 'react'
import './Home.css'
import SocialNet from '../SocialNetworkSidenav/SocialNet'
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typewriter from 'typewriter-effect';
import Profile from '../Profile/Profile'
import {
    useHistory,
    useParams 
  } from "react-router-dom";
  import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
  import Experience from "../Experience/Experience"
  import Projects from "../Projects/Projects"
  import Certifications from "../Certifications/Certifications"
  import Contact from "../Contact/Contact"
const Home = (props) => {

    const params = useParams()
    var map1 = new Map(
        [
            [
                "home", 
                    {
                        "data" : 
                        {
                            "prev" : null,
                            "next": "experience"
                        }
                    }
            ],
            [
                "experience", 
                    {
                        "data" : 
                        {
                            "prev" : "home",
                            "next": "project"
                        }
                    }
            ] ,
            [
                "project", 
                    {
                        "data" : 
                        {
                            "prev" : "experience",
                            "next": "certifications"
                        }
                    }
            ] ,
            [
                "certifications", 
                    {
                        "data" : 
                        {
                            "prev" : "project",
                            "next": "contact"
                        }
                    }
            ] ,
            [
                "contact", 
                    {
                        "data" : 
                        {
                            "prev" : "certifications",
                            "next": null
                        }
                    }
            ] ,
        ]
    );

    const[Designation, setDesignation] = useState(' I am a Full Stack Software Engineer at <strong>JP Morgan Chase</strong>. I am proficient builiding applications through React and Node I am proficient builiding applications through React and Node I am proficient builiding applications My Name Is Tanmay through React and Node I am My Name Is Tanmay proficient builiding applications My Name Is Tanmay through React and Node I am proficient builiding applications through React and Node My Name Is Tanmay')
    const[description, setBriefDescription] = useState('Hello, my name is Tanmay Mathur<br />')

    let history = useHistory();

    return (
        <div className="Base">
            <div className="TopNav">
                <div className="IconD">
                    <DashboardIcon className="DIcon" />
                </div>
                <div className="IconP">
                    <PersonIcon className="PIcon" onClick={() => history.push('/profile')}/>
                </div>
            </div>
            <div className="Data">
                    {
                        map1.get(props.match.params.componentName) != null ?
                    
                            map1.get(props.match.params.componentName).data.prev === null ? <SocialNet /> : 
                            <div className="backward" onClick={() => history.push(`/${ map1.get(props.match.params.componentName).data.prev}`)}>
                                {
                                    <ArrowBackIosIcon id="backicon" />
                                }
                                <span id="backward-datavalue">{map1.get(props.match.params.componentName).data.prev}</span>
                            </div>
                        :
                        ""    
                    }
                        
                    {
                        props.match.params.componentName === "home" ? 
                        <div className="test">
                            <Typewriter 
                                onInit={(typewriter) => {
                                    typewriter.changeDelay(110)
                                    .typeString('<span style="color: white;font-size:30px">' + description + '</span>')
                                    .typeString('<span style="color: #D3D3D3 ">' + Designation + '</span>')
                                    .start();  
                                    }}
                            />
                        </div> 
                    : ""
                    }

                    {
                        props.match.params.componentName === "experience" ?  <Experience /> : ""
                    }

                    {
                        props.match.params.componentName === "project" ?  <Projects /> : ""
                    }

                    {
                        props.match.params.componentName === "certifications" ?  <Certifications /> : ""
                    }

                    {
                        props.match.params.componentName === "contact" ?  <Contact /> : ""
                    }
                
                {
                    map1.get(props.match.params.componentName) != null 
                    ? 
                        <div className="forward" onClick={() => history.push(`/${ map1.get(props.match.params.componentName).data.next}`)}>
                            <span id="forward-datavalue">{map1.get(props.match.params.componentName).data.next}</span>
                            {
                                map1.get(props.match.params.componentName).data.next === null ? "" : <ArrowForwardIosIcon className="FIcon" /> 
                            }
                        </div>
                    :
                    ""
}
                
            </div>    
            
        </div>
    )
} 

export default Home;
