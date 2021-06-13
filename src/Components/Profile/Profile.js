import { useState } from 'react'
import './Profile.css'
import {connect} from 'react-redux'
import {SSN_Data} from '../../Actions/SSN'
import Profile_SSN from '../SocialNetworkSidenav/Profile_SSN'
import {
    Route,
    Router,
    Switch,
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
                    <span onClick={() => setFormName('SSN')}>Social Media</span>
                    <span onClick={() => setFormName('About')}>About</span>
                    <span onClick={() => setFormName('Experience')}>Experience</span>
                    <span onClick={() => setFormName('Project')}>Project</span>
                    <span onClick={() => setFormName('Certifications')}>Certifications</span>
                    <span onClick={() => setFormName('Contact')}>Contact</span>
                </div>
                <div className="forms">
                    {props.match && props.match.params.formId === 'SSN' ? <Profile_SSN /> : ''}
                    
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