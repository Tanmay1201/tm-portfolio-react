import { useState } from 'react'
import './Profile.css'
import {connect} from 'react-redux'
import {SSN_Data} from '../../Actions/SSN_Form'
import {
    useHistory
  } from "react-router-dom";
import axios from 'axios'

const Profile = props => {
    let history = useHistory();
    return (
        <>
            <div className="ProfileHead">
                <div className="Sections">
                    <span onClick={() => history.push('/profile/SSN')}>Social Media</span>
                    <span onClick={() => history.push('/profile/about')}>About</span>
                    <span onClick={() => history.push('/profile/experience')}>Experience</span>
                    <span onClick={() => history.push('/profile/project')}>Project</span>
                    <span onClick={() => history.push('/profile/certifications')}>Certifications</span>
                    <span onClick={() => history.push('/profile/contact')}>Contact</span>
                    
                </div>
                <div className="forms">
                    
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