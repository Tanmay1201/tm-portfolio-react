import './SocialNet.css'
import {
    useHistory
  } from "react-router-dom";
import axios from 'axios'
import {connect} from 'react-redux'
import {useState} from 'react'
import {SSN_FORM_OPEN} from '../../Actions/SSN'

const SSN_Form = (props) => {
    console.log('Form')
    const [url, setUrl] = useState('')
    const [iconName, seticonName] = useState('')
    const [colorName, setcolorName] = useState('')
    let history = useHistory();
    const submitValues = () => {
        const data = {
            url: url,
            iconName: iconName,
            colorName: colorName
        }
        console.log(data)
        axios.post('http://localhost:5000/ssn', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        history.push('/home')
    }

    if(props.formStatus === true)
    {
        return (
            <>  
                <div className='modal display-block'>
                    <div className="FormSSN">
                        
                        <div className="inputFields">
                        <h1 style={{color:"White"}}>Please fill the following details</h1>
                            <input id="URL" type='text' placeholder="ENTER SSN URL" onChange={(e) => setUrl(e.target.value)} value={url}/>
                            <input id="IconName" type='text' placeholder="ENTER SSN ICON NAME" onChange={(e) => seticonName(e.target.value)} value={iconName}/>
                            <input id="BackgroundColor" type="text" placeholder="ENTER BACKGROUND COLOR" onChange={(e) => setcolorName(e.target.value)} value={colorName} />
                            <div className="buttons">
                                <button id="submitbutton" type="submit" onClick={submitValues}>SUBMIT</button>
                                <button id="closebutton"  onClick={() => props.openForm(false)}>CLOSE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else
    {
        return null
    }


}

const mapStateToProps = state => {
    return {
        formStatus: state.SSN_Data.SSN_Form_Open
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openForm: (value) => dispatch(SSN_FORM_OPEN(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SSN_Form)