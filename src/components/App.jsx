import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import "es6-promise";
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';
import Home from './Home';
import Film from './Film';
import Person from './Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmsInfo: [],
      loaded: false,
      loadedPeople: false
    }
  }

  async loadFilms() {  // The FILMS button has been clicked so set the state with all properties.
    let films = await fetch("https://ghibliapi.herokuapp.com/films");
    let filmsInfo = await films.json();
    this.setState({
      loaded: true,
      loadedPeople: false,
      filmsInfo
    });
  }

  async loadPeople() {  // The PEOPLE button has been clicked so set the state with all properties.
    let films = await fetch("https://ghibliapi.herokuapp.com/people");
    let filmsInfo = await films.json();  // Use the same "filmsInfo" array as above.
    this.setState({
      loaded: false,
      loadedPeople: true,
      filmsInfo
    })
  }

  render() {
    return (
      <>
        <Router>
          <>
            <p><Link to="/"><button className="btn btn-warning text-light">Go Home</button></Link></p>
            <p><Link to="/films"><button className="btn btn-info text-light">View Films</button></Link></p>
            <p><Link to="/people"><button className="btn btn-info text-light">View People</button></Link></p>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/films" component={FilmCard} />
              <Route exact path="/people" component={PeopleCard} />
              <Route path="/films/:id" component={Film} />
              <Route path="/people/:id" component={Person} />
            </Switch>
          </>
        </Router>

      </>
    )
  }

}

export default App;
