import { useState } from 'react'
import './Profile.css'
import {connect} from 'react-redux'
import {SSN_Data} from '../../Actions/SSN'
import Profile_SSN from '../SocialNetworkSidenav/Profile_SSN'
import About_Form from '../About/About_Form'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    useHistory
  } from "react-router-dom";
const Profile = props => {
    const [currentForm, setCurrentForm] = useState('')
    let history = useHistory();
    const setFormName = value => {
        setCurrentForm(value)
        history.push(`/profile/${value}`)
    }
    console.log(props)
    
    return (
        <>
            <div className="ProfileHead">
                <div className="Sections">
                    <div id="backTohome" onClick={() => history.push('/home')}>
                        <ArrowBackIcon id="backTohome-icon"/>
                        <span>Back TO Home</span>
                    </div>
                    
                    <span onClick={() => setFormName('SSN')}>Social Media</span>
                    <span onClick={() => setFormName('About')}>About</span>
                    <span onClick={() => setFormName('Experience')}>Experience</span>
                    <span onClick={() => setFormName('Project')}>Project</span>
                    <span onClick={() => setFormName('Certifications')}>Certifications</span>
                    <span onClick={() => setFormName('Contact')}>Contact</span>
                </div>
                <div className="forms">
                    {props.location.pathname === "/profile" ? <h1>Click the Tabs to add/edit/delete the data</h1> : ''}
                    {props.match && props.match.params.component == "SSN" ? <Profile_SSN /> : ''}
                    {props.match && props.match.params.component == "About" ? <About_Form /> : ''}
                </div>
            </div>
        </>
    )
}



const mapDispatchToProps = dispatch => {
    return {
        addData: (data) => dispatch(SSN_Data(data))
    }
}

export default connect(null,mapDispatchToProps)(Profile)