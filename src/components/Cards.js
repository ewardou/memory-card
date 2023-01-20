import React from 'react';
import '../styles/Card.css';

export function Card(props) {
    return (
        <div id={props.id} className={'card'} onClick={props.onClick}>
            {props.text}
        </div>
    );
}
