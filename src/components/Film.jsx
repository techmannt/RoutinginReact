import React, { Component } from 'react';

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInfo: {},
      id: this.props.match.params.id
    }
  }

  async componentDidMount() {
    let films = await fetch("https://ghibliapi.herokuapp.com/films/" + this.state.id);
    let filmInfo = await films.json();
    this.setState({
      filmInfo
    });
  }

  render() {

    return (
      <div className="py-1" key={this.state.filmInfo.id}>

        <div className="card">
          <div className="card-body shadow">
            <h4 className="card-title">{this.state.filmInfo.title}</h4>
            <p className="body-text">{this.state.filmInfo.description}</p>
            <p className="body-text">Director: {this.state.filmInfo.director}</p>
            <p className="body-text">Producer: {this.state.filmInfo.producer}</p>
            <p className="body-text">Score: {this.state.filmInfo.rt_score}</p>
            <p className="body-text text-muted">Release date: {this.state.filmInfo.release_date}</p>

          </div>
        </div>

      </div>
    )

  }

}

export default Film;
