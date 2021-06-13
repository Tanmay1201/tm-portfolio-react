import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'

import Forms from './Components/Profile/Forms'
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
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/profile/:formId" component={Profile}>
          </Route>
        </Provider>
      </Router>
    </>
  );
}

export default App;
