import React, { useState, useEffect } from 'react';
import { Score, BestScore } from './components/Score';
import { Card } from './components/Cards';

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const cards = [
        { text: 'First', id: 1 },
        { text: 'Second', id: 2 },
        { text: 'Third', id: 3 },
    ];

    function increaseScore(e) {
        const id = e.target.getAttribute('id');
        if (!clickedCards.includes(id)) {
            setScore((prevScore) => prevScore + 1);
            setClickedCards((prevState) => [...prevState, id]);
            console.log(clickedCards);
        } else {
            setScore(0);
            setClickedCards([]);
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let array = cards.map((card) => {
        return (
            <Card
                onClick={increaseScore}
                id={card.id}
                key={card.id}
                text={card.text}
            />
        );
    });

    shuffleArray(array);

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
            <div>{array}</div>
        </div>
    );
}

export default App;
