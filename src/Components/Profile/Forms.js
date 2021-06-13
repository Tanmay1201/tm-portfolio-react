import './Forms.css'
import SSN_Form from '../SocialNetworkSidenav/SSN_Form'
import Profile_SSN from '../SocialNetworkSidenav/Profile_SSN'
const Forms = props => {
    console.log(props)
    return (
        <div className="mainForm">
            {
                
                props.match.params.formId === 'SSN' ? <Profile_SSN /> : ''
            }
        </div>
    )
}

export default Forms;