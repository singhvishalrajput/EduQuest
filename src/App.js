
import Navbars from './Component/Nav/Navbars'
import './App.css';

import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Summarize from './pages/Summarize.js';
import Login from './pages/login.js';
import SignUp from './pages/SignUp.js';
import Generative from './pages/generative.js';





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
                  
                  <Route exact path="/summarize">
                  <Summarize/>
                  </Route>
                  <Route exact path="/login">
                    <Login/>

                    </Route> 
                    <Route exact path="/register">
                    <SignUp/>

                    </Route> 
                    <Route exact path="/generative">
                      <Generative/>

                    </Route>
                    

                </Switch>

              </div>
          </div>
            
               
          

     </Router>

  );
}

export default App;
