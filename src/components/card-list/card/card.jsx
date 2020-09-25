import React from 'react';
import './card.css';


export const Card = props => (
    <div className="card-container">
      <img 
       alt="AutoInc"
       src={`https://robohash.org/${props.AutoInc.id}?set=set2&size=180x180`}
       />
        <h2> {props.AutoInc.name} </h2>
        <p> {props.AutoInc.email} </p>
    </div>
);