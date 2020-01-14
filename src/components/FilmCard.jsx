import React, { Component } from 'react';
import DisplayFilmCard from './DisplayFilmCard';

class FilmCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfo: [],
      loaded: false
    }
  }

  async componentDidMount() {  // The FILMS button has been clicked so set the state with all properties.
    let films = await fetch("https://ghibliapi.herokuapp.com/films");
    let filmInfo = await films.json();
    this.setState({
      loaded: true,
      filmInfo
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        this.state.filmInfo.map(film => { // Need to set the KEY at the top, first line of the RETURN within MAP.
          return (

              <div key={film.id}>
                <DisplayFilmCard films={film} />
              </div>

          )
        })
      )

    } else {
      return (
        <h1>Loading...</h1>
      )
    }

  }

}

export default FilmCard;
