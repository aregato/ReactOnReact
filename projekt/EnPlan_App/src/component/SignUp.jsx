import React, {Component} from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

import '../css/sign.css';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp(){
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error)
        this.setState({error})
      })
  }

  render() {
    return(
      <div className="body">
        <div className="all">
          <div className="container">
            <div className="jumbotron">
              <h1>En Plan App</h1>
            </div>
            <div className="well form-block">
              <h2>Registration </h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="email"
                  onChange={event => this.setState({email: event.target.value}) }
                  />
                  <input
                    className="form-control"
                    type="password"
                    placeholder="password"
                    onChange={event => this.setState({password: event.target.value}) }
                  />
                  <div className="errorMessage">{this.state.error.message}</div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => this.signUp()}
                  >
                    Registrera dig
                  </button>
              </div>
              <div className="link"><Link to={'/signIn'}>Är du redan medlem? Logga in istället</Link></div>
            </div>
          </div>
          <button
            className="btn btn-default"
            type="button"
          >
            Info
          </button>
        </div>
        <div className="info">
          hgej
        </div>
      </div>
    )
  }
}

export default SignUp;
