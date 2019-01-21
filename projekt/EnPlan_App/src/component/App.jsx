import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

import Timer from './Timer';

import '../css/App.css'

class App extends Component {
signOut(){
  firebaseApp.auth().signOut();
}

  render() {
    return(
      <div className="app">
        <div className="container">
        <br />
          <div className="well">
            <AddGoal />
          </div>
            <hr />
          <div className="row">
          <div className="col-lg-5">
          <div className="well">
            <GoalList />
          </div>
          </div>
          <div className="col-lg-5">
          <div className="well">
            <CompleteGoalList />
          </div>
          </div>
        </div>
          <hr />


          <hr />
          <button
            className="btn btn-danger"
            onClick={() => this.signOut()}
          >
            Logga ut
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  //console.log('state', state);
  //<Timer />
  return {}
}

export default connect(mapStateToProps, null)(App);
