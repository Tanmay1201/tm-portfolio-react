import './Projects.scss'

import {
    useHistory
  } from "react-router-dom";

import jpmc from "../Experience/jpmclogo.jpg"
import ct from '../Experience/ctlogo.png'
import linkedinicon from "../Experience/linkedin.png"

const Projects = () => {

    let projects = [
        {
            "ProjectName": "SpaceX Dashboard",
            "About": "",
            "TechStack": [
                "React",
                "Redux",
                "CSS",
                "HTML",
                "Node"
            ],
            "Link": "https://google.com",
            "images": [jpmc]
        },
        {
            "ProjectName": "SpaceX Dashboard",
            "About": "",
            "TechStack": [
                "React",
                "Redux",
                "CSS",
                "HTML",
                "Node"
            ],
            "Link": "https://google.com",
            "images": [ct]
        },
        {
            "ProjectName": "SpaceX Dashboard",
            "About": "",
            "TechStack": [
                "React",
                "Redux",
                "CSS",
                "HTML",
                "Node"
            ],
            "Link": "https://google.com",
            "images": [linkedinicon]
        }
    ]

    
    const handleScroll = (e) => {
        if (e.target.classList.contains("on-scrollbar") === false) {
            e.target.classList.add("on-scrollbar");
        }
    }

    window.addEventListener('scroll', handleScroll, true);


    return (
        <>
            <div className="project">
                <span id="projecttag">Project</span>
                <div className="projects">
                    {
                        projects.map((project, index) => (
                            <>

                            <img className="Test" src={project.images[0]} /> 
                            </>
                        ))
                    }
                </div>  
            </div>
        </>
    )
}

export default Projects;