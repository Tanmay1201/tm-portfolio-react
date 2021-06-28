import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {SSN_FORM_OPEN, SSN_Fetch} from '../../Actions/SSN'
import axios from 'axios'
import './SocialNet.css'

const SSN_Form = (props) => {
    let test1 = props.SSN[props.editIndex]
    let test2 = props.formType 

    const [url, setUrl] = useState('')
    const [iconName, seticonName] = useState('')
    const [colorName, setcolorName] = useState('')
    let history = useHistory();
    useEffect(() => {
        
        const setStates = () => {
            if(props.SSN[props.editIndex] !== undefined && props.SSN[props.editIndex].SSN_URL !== url)
            {
                setUrl(props.SSN[props.editIndex].SSN_URL)
            }

            if(props.SSN[props.editIndex] !== undefined && props.SSN[props.editIndex].SSN_Logo_Name !== iconName)
            {
                seticonName(props.SSN[props.editIndex].SSN_Logo_Name)
            }

            if(props.SSN[props.editIndex] !== undefined && props.SSN[props.editIndex].SSN_Background_Color !== colorName)
            {
                setcolorName(props.SSN[props.editIndex].SSN_Background_Color)
            }
            console.log('values - ' + props.SSN[props.editIndex])
        }
        if(props.formType === 'E')
        {
            setStates()
        }
        else
        {
            setUrl('')
            seticonName('')
            setcolorName('')
        }
        
    }, [test1, test2])

    const submitValues = (method) => {
        const data = {
            url: url,
            iconName: iconName,
            colorName: colorName
        }
        console.log(data)
        console.log(method)
        axios({
            method: method,
            url: 'http://localhost:5000/ssn',
            data: data
        })
        .then(res => {
            props.addData()
            props.openForm(false)
        })
        .catch(err => {
            console.log(err)
        })
        //history.push('/home')
    }

    if(props.formStatus === true )
    {
        return (
            <>  
                <div className='modal display-block'>
                    <div className="FormSSN">
                        <div className="inputFields">
                            {
                                props.formType === 'E' ? <h1 style={{color:"White"}}>PLEASE UPDATE FOLLOWING DETAILS</h1> : <h1 style={{color:"White"}}>PLEASE FILL THE FOLLOWING DETAILS</h1> 
                            }
                            <input id="URL" type='text' placeholder="ENTER SSN URL" onChange={(e) => setUrl(e.target.value) } value={url}/>
                            <input id="IconName" type='text' placeholder="ENTER SSN ICON NAME" onChange={(e) => seticonName(e.target.value)} value={iconName}/>
                            <input id="BackgroundColor" type="text" placeholder="ENTER BACKGROUND COLOR" onChange={(e) => setcolorName(e.target.value)} value={colorName} />
                            <div className="buttons">
                                {
                                    props.formType === 'E' ? 
                                    <button id="submitbutton" type="submit" onClick={() => submitValues('Patch')}>EDIT</button> : 
                                    <button id="submitbutton" type="submit" onClick={() => submitValues('Post')}>SUBMIT</button>
                                }
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
        SSN: state.SSN_Data.data,
        formStatus: state.SSN_Data.SSN_Form_Open,
        editIndex: state.SSN_Data.SSN_Index,
        formType: state.SSN_Data.SSN_Form_Type
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openForm: (value) => dispatch(SSN_FORM_OPEN(value)),
        addData: () => dispatch(SSN_Fetch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SSN_Form)