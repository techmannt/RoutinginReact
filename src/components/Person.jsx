import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {},
      loaded: false,
      id: this.props.match.params.id  // Set the id = to the id of the parameter entered in the URL.
    }
  }

  async componentDidMount() {
    let person = await fetch("https://ghibliapi.herokuapp.com/people/" + this.state.id);
    let personInfo = await person.json();
    this.setState({
      loaded: true,
      personInfo
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="py-1 col-md-6 mx-auto" key={this.state.personInfo.id}>

          <div className="card">
            <div className="card-body shadow">
              <h4 className="card-title">{this.state.personInfo.name}</h4>
              <p className="body-text">Gender: {this.state.personInfo.gender}</p>
              <p className="body-text">Age: {this.state.personInfo.age}</p>
              <p className="body-text">Eye color: {this.state.personInfo.eye_color}</p>
              <p className="body-text">Hair color: {this.state.personInfo.hair_color}</p>
            </div>
          </div>

        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }

  }

}

export default Person;
