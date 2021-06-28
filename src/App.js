import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'
import About from './Components/About/About'

import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import {Provider} from 'react-redux'
import Store from './Store'
function App() {
  return (
    <>
      <Router>
        <Provider store={Store}>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/:componentName" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile/:component" component={Profile} />
        </Provider>
      </Router>
    </>
  );
}

export default App;
