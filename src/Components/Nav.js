import {connect} from 'react-redux'
import {
    useHistory,
    useParams 
  } from "react-router-dom";
import {openNav} from '../Actions/Common'
import './Nav.css'
let style = {
    backgroundColor:"#161616", 
        display:"flex", 
        flexDirection:"column" , 
        justifyContent:"center", 
        height:"100%", 
        paddingLeft:"40%", 
        
        fontFamily:"cursive"
}
const Nav = props => {
    let history = useHistory();
        return (
            <>
                <div style={style}>
                        <span className="nav-item" onClick={() => {props.handleNavStatus(false) ; history.push('/home')}}>
                            Home
                        </span>
                        <span className="nav-item" onClick={() => {props.handleNavStatus(false) ; history.push('/experience')}}>
                        Experience
                        </span>
                        <span className="nav-item" onClick={() => {props.handleNavStatus(false) ; history.push('/project')}}>
                        Projects
                        </span>
                        <span className="nav-item" onClick={() => {props.handleNavStatus(false) ; history.push('/contact')}}>
                        Contact
                        </span>
                </div>
            </>
        )
}

const mapStateToProps = state => {
    return {
        shouldDisplay: state.CommonReducer.navOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleNavStatus: (data) => dispatch(openNav(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);