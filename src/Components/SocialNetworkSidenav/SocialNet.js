import './SocialNet.css'
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
const SocialNet = props => {

    const [SSN_Data, setSSN_Data] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/ssn')
        .then(res=> {
            console.log(res)
            setSSN_Data(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      }, [])
    return (
        <>
            <div className="SSN">
                {
                SSN_Data && SSN_Data.map((data) => (
                    <div style={{backgroundColor:data.SSN_Background_Color}} className="Generic">
                        <span>{data.SSN_Logo_Name}</span>
                    </div>
                        
                ))
            }
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        SSN: state.SSN_Form.data
    }
}

export default connect(mapStateToProps, null)(SocialNet)