import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/shared/Header';
import Main from './components/Main';
import Temperatura from './components/Temperatura';
import Humedad from './components/Humedad';
import Luz from './components/Luz';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/temperatura" component={Temperatura} exact />
          <Route path="/humedad" component={Humedad} exact />
          <Route path="/luz" component={Luz} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
