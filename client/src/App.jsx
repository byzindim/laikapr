import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter
} from "react-router-dom";
import DesignArt from './pages/DesignArt';
import Forum from './pages/Forum';
import Laikainfo from './pages/Laikainfo';
import MensClub from './pages/MensClub';
import Home from './pages/Home';
import Rating from './pages/Rating';
import Register from './pages/Register';
import SwitchLanguage from './pages/SwitchLanguage';
import Contact from './pages/Contact';
import CopyRight from './pages/CopyRight';
import PolicyWording from './pages/PolicyWording';
import ArtHumans from './pages/ArtHuman';
import DenisEchakov from './pages/Arts/DenisEchakov';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className="App">
        <BrowserRouter>
          <Route history={history} exact path='/' component={Home} />
          <Route history={history} path='/designart' component={DesignArt} />
          <Route history={history} path='/rating' component={Rating} />
          <Route history={history} path='/forum' component={Forum} />
          <Route history={history} path='https://laikainfo.com' />
          <Route history={history} path='/mensclub' component={Home} />
          <Route history={history} path='/register' component={Register} />
          <Route history={history} path='/switchlanguage' component={SwitchLanguage} />
          <Route history={history} path='/policywording' component={PolicyWording} />
          <Route history={history} path='/copyright' component={CopyRight} />
          <Route history={history} path='/contact' component={Contact} />
          <Route history={history} path='/arthuman' component={ArtHumans} />
          <Route history={history} path='/denisechakov' component={DenisEchakov} />
          <Redirect from='/' to='/' />
        </BrowserRouter>
      </div>
    );
  }
}

export default withRouter(App)
