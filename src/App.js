import React, { useState, useEffect } from 'react';
import { Score, BestScore } from './components/Score';
import { Card } from './components/Cards';
import { images } from './components/images';
import './styles/App.css';

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const cards = [
        { text: 'Ceviche', id: 1, image: images.ceviche },
        { text: 'Hot pot', id: 2, image: images.hotpot },
        { text: 'Hamburger', id: 3, image: images.hamburger },
        { text: 'Chicken biryani', id: 4, image: images.chickenBiryani },
        { text: 'Feijoada', id: 5, image: images.feijoada },
        { text: 'Gyozas', id: 6, image: images.gyozas },
        { text: 'Pastel', id: 7, image: images.pastel },
        { text: 'Salchipapa', id: 8, image: images.salchipapa },
        { text: 'Satay', id: 9, image: images.satay },
        { text: 'Shawarma', id: 10, image: images.shawarma },
        { text: 'Tequeños', id: 11, image: images.tequeños },
        { text: 'Toshikoshi soba', id: 12, image: images.toshikoshiSoba },
    ];

    function increaseScore(e) {
        const id = e.target.getAttribute('id');
        console.log(e.target);
        if (!clickedCards.includes(id)) {
            setScore((prevScore) => prevScore + 1);
            setClickedCards((prevState) => [...prevState, id]);
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
                image={card.image}
            />
        );
    });

    shuffleArray(array);

    useEffect(() => {
        console.log(clickedCards);
        if (score > bestScore) {
            setBestScore(score);
        }
    }, [score]);

    return (
        <div className="App">
            <div>
                <Score currentScore={score} />
                <BestScore bestScore={bestScore} />
            </div>
            <div className="cards-container">{array}</div>
        </div>
    );
}

export default App;
