import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import InfoCard from './components/InfoCard'
import Accommodations from './components/Accommodations'
import Bio from './components/Bio'
import GiftIdeas from './components/GiftIdeas'
import Photos from './components/Photos'
import Login from './components/Login'
import Signup from './components/Signup'
import isAuthenticated from './components/hoc/isAuthenticated.js'

const AuthedPhotosContainer = isAuthenticated(Photos)
const AuthedInfoCardContainer = isAuthenticated(InfoCard)
const AuthedBioContainer = isAuthenticated(Bio)
const AuthedAccommodationsContainer = isAuthenticated(Accommodations)
const AuthedGiftIdeasContainer = isAuthenticated(GiftIdeas)

class Main extends Component {

  logout(){
    localStorage.clear()
    this.props.history.push('./login')

  }

  render() {
    return (
      <div >
        <NavBar logout={this.logout.bind(this)}/>
        <Route exact path='/' render={() => <AuthedInfoCardContainer />} />
        <Switch>
          <Route path='/signup' render={() => <Signup history={this.props.history} />} />
          <Route path='/login' render={() => <Login history={this.props.history} />} />
          <Route path='/photos' render={() => <AuthedPhotosContainer />} />
          <Route path='/accommodations' render={() => <AuthedAccommodationsContainer />} />
          <Route path='/whereitallbegan' render={() => <AuthedBioContainer />} />
          <Route path='/GiftIdeas' render={() => <AuthedGiftIdeasContainer />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main)
