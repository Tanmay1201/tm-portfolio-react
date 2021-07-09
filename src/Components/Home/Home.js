import { useState } from 'react'
import './Home.css'
import SocialNet from '../SocialNetworkSidenav/SocialNet'
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typewriter from '../Common/TypeWriterEffect'
import {connect} from 'react-redux'
import {
    useHistory,
    useParams 
  } from "react-router-dom";
  import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
  import Experience from "../Experience/Experience"
  import Projects from "../Projects/Projects"
  import Certifications from "../Certifications/Certifications"
  import Contact from "../Contact/Contact"
  import {openNav} from '../../Actions/Common'
  import Nav from '../Nav'

const Home = (props) => {
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
                            "next": "contact"
                        }
                    }
            ] ,
            [
                "contact", 
                    {
                        "data" : 
                        {
                            "prev" : "project",
                            "next": null
                        }
                    }
            ] ,
        ]
    );

    const[Description, setDescription] = useState(' I am a Full Stack Software Engineer at JP Morgan Chase. <br> I am proficient builiding applications through React and Node ')
    const[Designation, setDesignation] = useState('Hello, my name is Tanmay Mathur<br>')
    const[navclassname, setnavclassname] = useState('no-nav')
    let history = useHistory();

    if(props.navStatus === true && navclassname !== 'nav')
    {
        setnavclassname('nav')
    }
    else if(props.navStatus === false && navclassname !== 'no-nav')
    {
        setnavclassname('no-nav')
    }

    return (
        <>
        
        
        {
            props.match.params.componentName !== "profile" 
            ? 
            <>
            <div className={navclassname}>
                    <Nav />
                </div>
                <div className="Base">
             
                <div className="TopNav">
                    <div className="IconD">
                        <DashboardIcon className="DIcon" onClick={() => props.handleNavStatus(!props.navStatus)}/>
                    </div>
                    <div className="IconP">
                        <PersonIcon className="PIcon" onClick={() => history.push('/profile')}/>
                    </div>
                </div>
                
                <div className="Data">
                    {
                        map1.get(props.match.params.componentName) != null ?
                    
                            map1.get(props.match.params.componentName).data.prev === null ? <SocialNet /> : 
                            <div className="backward" onClick={() => {history.push(`/${ map1.get(props.match.params.componentName).data.prev}`)}}>
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
                             <Typewriter string={Designation + Description} />
                             
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
        </>
        :
        ""
        }
        </>
    )
} 

const mapStateToProps = state => {
    return {
        navStatus: state.CommonReducer.navOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleNavStatus: (data) => dispatch(openNav(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
