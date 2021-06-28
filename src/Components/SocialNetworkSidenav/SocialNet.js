import './SocialNet.css'
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
import {SSN_Fetch} from '../../Actions/SSN'

const SocialNet = props => {
    useEffect(() => {
            props.addData()
        
    }, [])
    
    return (
        <>
            <div className="wrapper">
            <div className="SSN">
                {
                props.SSN && props.SSN.map((data) => (
                    <div style={{backgroundColor:data.SSN_Background_Color}} className="Generic">
                        <span>{data.SSN_Logo_Name}</span>
                    </div>
                        
                ))
            }
            </div>
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
        addData: () => dispatch(SSN_Fetch())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SocialNet)