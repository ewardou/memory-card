import React, { useState } from 'react';
import { Score, BestScore } from './components/Score';

function App() {
    return (
        <div className="App">
            <Score currentScore={3} />
            <BestScore bestScore={9} />
        </div>
    );
}

export default App;
