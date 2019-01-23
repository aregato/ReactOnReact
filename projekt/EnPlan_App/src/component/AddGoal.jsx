import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

import '../css/AddGoal.css'

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      error_message: ''
    }
  }

  addGoal(){
    //console.log('this', this);
    const { title } = this.state;
    const { email } = this.props.user;
    console.log(title)
    if(title !== ""){
      goalRef.push({email, title});
      this.refs.goalInput.value = '';
      this.state.title = "";

      //document.getElementById("addGoal").style.backgroundColor = "white";
    }else{
      let error_message = "Du måste ange en text till din uppgift. Denna uppgift läggs upp i den delade listan."
      //document.getElementById("addGoal").style.backgroundColor = "red";
      this.setState({error_message})
    }

  }

  render() {
    return(
      <div className="form-inline">
        <h4>Lägg till en uppgift</h4>
        <div className="form-group">
          <input
            id="addGoal"
            type="text"
            placeholder="Skriv en text"
            className="form-control"
            onChange={event => this.setState({title: event.target.value})}
            ref="goalInput"
          />
          <div className="errorMsg">{this.state.error_message}</div>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
          >
            Lägg till
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  //console.log('state in AddGoal.jsx', state);
  return{
    user
  }
}

export default connect(mapStateToProps, null) (AddGoal);
