import './Home.css'
import SocialNet from '../SocialNetworkSidenav/SocialNet'
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {
    useHistory
  } from "react-router-dom";

const Home = () => {
    let history = useHistory();

    return (
        <div className="Base">
            <div className="TopNav">
            <div className="IconD">
                    <DashboardIcon className="DIcon" />
                </div>
                <div className="IconP">
                    <PersonIcon className="PIcon" onClick={() => history.push('/profile')}/>
                </div>
                
            </div>
            <SocialNet />
        </div>
    )
} 

export default Home;