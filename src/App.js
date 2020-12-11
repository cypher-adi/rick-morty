import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/UI/Navbar';
import Banner from './Components/UI/Banner';
import NotFound from './Components/UI/NotFound';
import Footer from './Components/UI/Footer';

import Home from './Components/Home';
import CharacterGrid from './Components/Characters/CharacterGrid';
import LocationGrid from './Components/Locations/LocationGrid';
import EpisodeGrid from './Components/Episodes/EpisodeGrid';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Banner />
        <div className="container mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/characters" component={CharacterGrid} />
            <Route path="/locations" component={LocationGrid} />
            <Route path="/episodes" component={EpisodeGrid} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
