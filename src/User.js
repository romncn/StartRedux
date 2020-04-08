import React, { Component } from 'react';


class User extends Component {
  render() {
    return (
      <div>
       <h1>Hello React Hello Redux</h1>
       <h2>Hello : {this.props.username}</h2>
       <h2>Age : {this.props.userage}</h2>
      </div>
    )
  }
}


export default User;
