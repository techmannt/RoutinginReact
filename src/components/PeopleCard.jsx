import React, { Component } from 'react';
import DisplayPeopleCard from './DisplayPeopleCard';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfo: [],
      loaded: false
    }
  }

  async componentDidMount() {
    let films = await fetch("https://ghibliapi.herokuapp.com/people");
    let filmInfo = await films.json();
    this.setState({
      loaded: true,
      filmInfo
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <main className="container">
          {this.state.filmInfo.map(film => {
          return(
            <div key={film.id} className="col-md-7 mx-auto">
            <DisplayPeopleCard people={film} />
          </div>
          )
        })}
        </main>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }

}

export default PeopleCard;
