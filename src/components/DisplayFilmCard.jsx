import React from 'react';
import { Link } from "react-router-dom";

const DisplayFilmCard = (props) => {
  return (  // No fragment needed here since <div> is used.

      <div className="py-1" key={props.films.id}>
        <div className="card">

          <div className="card-body shadow">
            <h4 className="card-title">{props.films.title}</h4>
            <p className="body-text">{props.films.description}</p>
            <p className="body-text text-muted">Release date: {props.films.release_date}</p>
            <Link className="btn btn-primary" to={`/films/${props.films.id}`}>View Details</Link>
          </div>

        </div>
      </div>

  )

}

export default DisplayFilmCard;
