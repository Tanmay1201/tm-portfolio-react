import './SocialNet.css'
import { useEffect, useState } from "react"
import {connect} from 'react-redux'
import axios from 'axios'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Handle_Form, SSN_Fetch} from '../../Actions/SSN'

import SSN_Form from '../SocialNetworkSidenav/SSN_Form'

const Profile_SSN = (props) => {
    useEffect(() => {        
            props.addData()
    }, [])

    const handleDelete = (value) => {
        console.log(value)
        axios
        .delete(`http://localhost:5000/ssn/${value}`)
        .then(res => {
            props.addData()
        })
        .catch(err => {
            console.log(err);
        });
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
                            <AddCircleOutlineIcon onClick={() => props.openForm(true, 'A', null)}/>
                        
                    </th>
                    {
                        props.SSN && props.SSN.map((data, index) => (
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
                                            <EditIcon onClick={() => props.openForm(true, 'E', index)} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="DelIcon">
                                            <DeleteIcon onClick={() => handleDelete(data.SSN_Logo_Name)}/>
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
        openForm: (value, type, index) => dispatch(Handle_Form(value, type, index)),
        addData: () => dispatch(SSN_Fetch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile_SSN)