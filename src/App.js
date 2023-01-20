import React, { useState, useEffect } from 'react';
import { Score, BestScore } from './components/Score';
import { Card } from './components/Cards';

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(8);

    const increaseScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    useEffect(() => {
        console.log('Effect');
        if (score > bestScore) {
            setBestScore(score);
            console.log('Match best score');
        }
    }, [score]);

    return (
        <div className="App">
            <div>
                <Score currentScore={score} />
                <BestScore bestScore={bestScore} />
            </div>
            <div>
                <Card onClick={increaseScore} id={1} text={'First'} />
                <Card onClick={increaseScore} id={2} text={'Second'} />
                <Card onClick={increaseScore} id={3} text={'Third'} />
            </div>
        </div>
    );
}

export default App;
