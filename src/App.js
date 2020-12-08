import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/UI/Navbar';
import Home from './Components/Home';
import Banner from './Components/UI/Banner';
import Footer from './Components/UI/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Banner />
        <div className="container mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
