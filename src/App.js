import React, { Component } from 'react';
import User from './User';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <User username = {this.props.user.name} userage = {this.props.user.age}></User>
        <button onClick={()=>this.props.setName("Natchanon")}>ChangeName</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    emp: state.emp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) =>{
      dispatch({
        type:"setName",
        payload: name
      })
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(App);
