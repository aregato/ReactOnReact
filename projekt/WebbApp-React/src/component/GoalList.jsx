import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';



class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({email, title, serverKey});
        //console.log('goal', goal);
      })
      this.props.setGoals(goals);
    })
  }

  render(){
    //console.log('this.props.goals', this.props.goals);
    return(
      <div className="goalList">
      <h4>Delade uppgifter</h4>
        {
          this.props.goals.map((goal, index) => {
            return(

              <GoalItem key={index} goal={goal} />

            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  const { goals } = state;
  return{
    goals
  }
}

export default connect (mapStateToProps, { setGoals }) (GoalList);
