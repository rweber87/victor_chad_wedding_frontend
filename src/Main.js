import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import InfoCard from './components/InfoCard'
import Accommodations from './components/Accommodations'
import Bio from './components/Bio'
import Photos from './components/Photos'


class Main extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Route exact path='/' render={() => <InfoCard />} />
        <Switch>
          <Route path='/photos' render={() => <Photos />} />
          <Route path='/accommodations' render={() => <Accommodations />} />
          <Route path='/whereitallbegan' render={() => <Bio />} />
        </Switch>
      </div>
    );
  }
}

export default Main
