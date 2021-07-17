import './Contact.scss'
import {useState} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Contact = () => {

    const [error, setError] = useState('')
    return (
        <>
            <div className="contact">
                <span id="headline">Let's Get In Touch</span><br />
                <span>If you want to get in touch or discuss something with me or even just want to connect, <br />
                then please fill in your name and EmailID and I will definitely get back to you!</span><br />
                <div className="errors">
                    <p>{error}</p>
                </div>
                <div className="inputfields">
                    <input type="text" id="contact-name" placeholder="Enter Name"/>
                    <input type="text" id="contact-email" placeholder="Enter Email ID"/><br />
                    <button type="submit" id="contact-submit">Submit</button>
                </div>
                <div className="socials">
                    <span id="socialconnects">Connect with me on Facebook, LinkedIn and Github using the following buttons</span>
                    <div style={{display:"flex", justifyContent:"flex-start", padding:"20px"}}>
                        <div style={{cursor:"pointer", display:"Flex", backgroundColor: "#4567B2", marginTop: "10px", paddingTop:"10px" ,padding:"5px", borderRadius:"10px", fontSize:"15px"}}>   
                            <FacebookIcon style={{fontColor:"#4567B2"}}/>
                            <span style={{marginLeft:"2px", marginTop:"-8px"}}>FACEBOOK</span>
                        </div>
                        <div style={{display:"Flex", backgroundColor: "#0e76a8", marginLeft:"20px", marginTop: "10px", paddingTop:"10px" ,padding:"5px", borderRadius:"10px", fontSize:"15px"}}>   
                            <LinkedInIcon style={{fontColor:"#0e76a8"}}/>
                            <span style={{marginLeft:"2px", marginTop:"-8px"}}>LINKEDIN</span>
                        </div>
                        <div style={{display:"Flex", backgroundColor: "#333", marginLeft:"20px", marginTop: "10px", paddingTop:"10px" ,padding:"5px", borderRadius:"10px", fontSize:"15px"}}>   
                            <GitHubIcon style={{fontColor:"#4078c0"}}/>
                            <span style={{marginLeft:"2px", marginTop:"-8px"}}>GITHUB</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;