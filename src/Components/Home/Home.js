import './Home.css'
import SocialNet from '../SocialNetworkSidenav/SocialNet'
import PersonIcon from '@material-ui/icons/Person';
import {
    useHistory
  } from "react-router-dom";

const Home = () => {
    let history = useHistory();

    return (
        <div className="Base">
            <div className="TopNav">
                <h2>Hi! This is Tanmay. Thanks for visiting my website!</h2>
                <div className="Icon">
                <PersonIcon  onClick={() => history.push('/profile')}/>
                </div>
                
            </div>
            <SocialNet />
        </div>
    )
} 

export default Home;