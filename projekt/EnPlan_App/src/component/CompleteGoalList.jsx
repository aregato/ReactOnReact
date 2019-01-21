import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {

  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title})
      })
      //console.log('completeGoals', completeGoals);
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted(){
    completeGoalRef.set([]);
  }

  render(){
    //console.log('this.props.completeGoals',this.props.completeGoals);
    return(
      <div className="goalList">
      <h4>Avklarade uppgifter</h4>
        {
          this.props.completeGoals.map((completeGoals, index) => {
          const {title, email} = completeGoals;
          return (
            <div className="listItem" key={index}>
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
            )
          })
        }
        <hr />
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Rensa alla
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
