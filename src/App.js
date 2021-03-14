import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import './Styles.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />      
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
          </Switch>   
      </div>
    </Router>

  );
}

export default App;
