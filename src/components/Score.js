import React from 'react';

export function Score(props) {
    return <p>{'Current score: ' + props.currentScore}</p>;
}

export function BestScore(props) {
    return <p>{'Best score: ' + props.bestScore}</p>;
}
