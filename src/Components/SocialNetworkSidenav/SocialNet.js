import './SocialNet.css'
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
import {SSN_Fetch} from '../../Actions/SSN'
import facebookicon from './facebook.png'
import githubicon from './github.png'
import linkedinicon from './LinkedIn.png'
const SocialNet = props => {
    useEffect(() => {
            props.addData()
        
    }, [])
    
    return (
        <>
            <div className="wrapper">
            <div className="SSN">
                {   
                    <>
                        <img className='image' src={facebookicon} />
                        <img className="image" src={githubicon} />
                        <img className="image" src={linkedinicon} />
                    </>
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