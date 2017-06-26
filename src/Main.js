import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import InfoCard from './components/InfoCard'
import Accommodations from './components/Accommodations'
import Bio from './components/Bio'
import Photos from './components/Photos'
import Login from './components/Login'
import Signup from './components/Signup'
import isAuthenticated from './components/hoc/isAuthenticated.js'

const AuthedPhotosContainer = isAuthenticated(Photos)
const AuthedInfoCardContainer = isAuthenticated(InfoCard)
const AuthedBioContainer = isAuthenticated(Bio)
const AuthenticatedAccommodationsContainer = isAuthenticated(Accommodations)

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
          <Route path='/accommodations' render={() => <AuthenticatedAccommodationsContainer />} />
          <Route path='/whereitallbegan' render={() => <AuthedBioContainer />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main)
