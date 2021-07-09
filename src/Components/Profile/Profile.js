import { useState } from 'react'
import './Profile.css'
import {connect} from 'react-redux'
import {SSN_Data} from '../../Actions/SSN'
import Profile_SSN from '../SocialNetworkSidenav/Profile_SSN'
import About_Form from '../About/About_Form'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    useHistory,
    useRouteMatch,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Profile = props => {
    const [currentForm, setCurrentForm] = useState('')
    let history = useHistory();
    let { path, url } = useRouteMatch();
    const setFormName = value => {
        setCurrentForm(value)
        history.push(`/profile/${value}`)
    }
    console.log(props)
    const isEmpty = obj => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
            {
                return false;
            }  
        }
        return true;
    }

    return (
        <>
            <div className="ProfileHead">
                    <div className="Sections">
                        <div id="backTohome" onClick={() => history.push('/home')}>
                            <ArrowBackIcon id="backTohome-icon"/>
                            <span>Back TO Home</span>
                        </div>
                        <span onClick={() => setFormName('SSN')}>SSN</span>
                        <span onClick={() => setFormName('About')}>About</span>
                        <span onClick={() => setFormName('Experience')}>Experience</span>
                        <span onClick={() => setFormName('Project')}>Project</span>
                        <span onClick={() => setFormName('Contact')}>Contact</span>
                    </div>
                <div className="forms">
                    {props.location.pathname === "/profile" ? <h1>Click the Tabs to add/edit/delete the data</h1> : ''}
                    {props.location.pathname == "/profile/SSN" ? <Profile_SSN /> : ''}
                    {props.location.pathname == "/profile/About" ? <About_Form /> : ''}
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