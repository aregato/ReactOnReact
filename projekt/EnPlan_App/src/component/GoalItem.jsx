import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';
import '../css/GoalItem.css';

class GoalItem extends Component {
  completeGoal(){
    //add to complete goals on the database
    //remove this goal from the goals reference
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    //console.log('email', email, 'title', title)
    console.log('serverKey', serverKey);
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }
  render(){
    console.log('this.props.goal', this.props.goal);
    const { email, title } = this.props.goal;
    return(
      <div className="goalitem">
        <strong>{title}</strong>
        <span> - submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
