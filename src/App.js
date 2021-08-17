import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Grid, Container } from 'semantic-ui-react'
import Header from './components/Header'

import Home from './pages/Home'

function App() {
  return (
    <Router>
    
          
      
      <div>
        <Header />
        
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
