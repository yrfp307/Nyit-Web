import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Abouts from './views/Abouts';
import Contact from './views/Contact';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Abouts" component={Abouts} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}
