import React from 'react';
import { Link } from "react-router-dom";

const DisplayPeopleCard = (props) => {
  return (  // No fragment needed here since <div> is used.

      <div className="py-1" key={props.people.id}>
        <div className="card">

          <div className="card-body shadow mx-4">
            <h4 className="card-title">{props.people.name}</h4>
            <p className="body-text">Gender: {props.people.gender}</p>
            <p className="body-text">Age: {props.people.age}</p>
            <Link className="btn btn-primary" to={`/people/${props.people.id}`}>View Details</Link>

          </div>

        </div>
      </div>

  )

}

export default DisplayPeopleCard;
