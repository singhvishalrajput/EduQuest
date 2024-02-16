
import Navbars from './Component/Nav/Navbars'
import './App.css';

import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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
                </Switch>

              </div>
          </div>
            
               
          

     </Router>

  );
}

export default App;
