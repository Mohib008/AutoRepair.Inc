import React from 'react';
import { Card } from '../card/card';
import './card-list.css';


export const CardList = props => {
    return <div className="card-list">
        {props.AutoIncs.map(AutoInc => (
           <Card key={AutoInc.id} AutoInc={AutoInc} />
         ))}
    </div>;
    };