import React from 'react';

require('dotenv').config();

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "https://workplease.herokuapp.com/login/strava"
    };
  }

  componentDidMount() {
    if(process.env.NODE_ENV == "development"){
      this.setState({link :"http://localhost:5000/login/strava"});
    } 
  }

  render() {
    return (
      <a className = "Login-button" href={this.state.link}>
        <button>
          Login
        </button>
      </a>
    );
  }
}

