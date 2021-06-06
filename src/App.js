import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Provider} from 'react-redux'
import Store from './Store'
function App() {
  return (
    <>
      <Router>
      <Provider store={Store}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;
