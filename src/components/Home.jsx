import React, { Component } from 'react';
import 'isomorphic-fetch';
import "es6-promise";
import Logo from "../logo.png";

class Home extends Component {

  render() {
    return(
      <p><img src={Logo} alt="logo" /></p>
    )
  }

}

export default Home;
