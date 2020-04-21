import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';

// import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import About from './About/About'
import Products from './Products/Products'
import Services from './Services/Services'
import Contact from './Contact/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <nav> 
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{/* <Navigation LogoTitle='Pencil Co.'/> */}