import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

import Timer from './Timer';
import { CSSTransition } from 'react-transition-group';
import '../css/App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appearHome: true
    }
  }
signOut(){
  firebaseApp.auth().signOut();
}

  render() {
    const { appearHome } = this.state;
    return(
      <div className="app">
      <CSSTransition
        in={appearHome}
        appear={true}
        timeout={1000}
        classNames="fade"
      >
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
      </CSSTransition>
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
