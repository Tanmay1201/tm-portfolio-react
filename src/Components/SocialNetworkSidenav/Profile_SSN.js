import './SocialNet.css'
import { useEffect, useState } from "react"
import {connect} from 'react-redux'
import axios from 'axios'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {SSN_FORM_OPEN} from '../../Actions/SSN'
import SSN_Form from '../SocialNetworkSidenav/SSN_Form'

const Profile_SSN = (props) => {
    const [SSN_Data, setSSN_Data] = useState([])
    if(SSN_Data.length == 0)
        {
            axios.get('http://localhost:5000/ssn')
            .then(res=> {
                console.log(res)
                setSSN_Data(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }

    return (
        <>
        <SSN_Form />
        <h1>All SSN's</h1>
        <div className="table">
            <table>
                    <th>
                        <div className="col_url">
                            URL
                        </div>
                    </th>
                    <th>
                        <div className="col_logo">
                            Icon Name
                        </div>
                    </th>
                    <th>
                        <div className="col_bgcolor">
                            BG Color
                        </div>
                    </th>
                    <th>
                            <AddCircleOutlineIcon onClick={() => props.openForm(true)}/>
                        
                    </th>
                    {
                        SSN_Data && SSN_Data.map((data) => (
                                <tr>
                                    <td>
                                        <div className="row_url" style={{backgroundColor:data.SSN_Background_Color}}>{data.SSN_URL}</div>
                                    </td>
                                    <td>
                                        <div className="row_logo" style={{backgroundColor:data.SSN_Background_Color}}>{data.SSN_Logo_Name}</div>
                                    </td>
                                    <td>
                                        <div className="row_bgcolor" style={{backgroundColor:data.SSN_Background_Color}}>{data.SSN_Background_Color}</div>
                                    </td>
                                    <td>
                                        <div className="EIcon">
                                            <EditIcon />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="DelIcon">
                                            <DeleteIcon />
                                        </div>
                                        
                                    </td>
                                </tr>
                        ))
                    }
            </table>
        </div>  

        </>
    )
}

const mapStateToProps = state => {
    return {
        SSN: state.SSN_Data.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openForm: (value) => dispatch(SSN_FORM_OPEN(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile_SSN)