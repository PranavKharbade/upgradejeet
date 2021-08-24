import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Home extends Component {
  render() {
   
    const name=JSON.parse(localStorage.getItem("user")).username
    console.log("home",this.props.name,name)
    return (
      <div className="row">
                <div className="rightPanel">
                <div className="marquee"><p>Welcome {this.props.name?this.props.name:name} to dashboard!</p></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.profile.username
  }
}

export default connect(mapStateToProps)(Home);
