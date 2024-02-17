
import Navbars from './Component/Nav/Navbars'
import './App.css';

import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Summarize from './pages/summarize.js';
import Login from './pages/login.js';
import SignUp from './pages/SignUp.js';




function App() {
  return (
     <Router>
          <div className="App">
             <Navbars/>
               
              <div className="content">
                <Switch>
                  <Route exact path="/">
                  <Home/>
                  </Route> 
                  
                  <Route path="/summarize">
                  <Summarize/>
                  </Route>
                  <Route exact path="/login">
                    <Login/>

                    </Route> 
                    <Route exact path="/register">
                    <SignUp/>

                    </Route> 

                </Switch>

              </div>
          </div>
            
               
          

     </Router>

  );
}

export default App;
