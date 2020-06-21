import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <div className="chat-card-item">
            {props.children}
        </div>
    );
};

export default Card;