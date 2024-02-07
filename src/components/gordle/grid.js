import React from "react";
import Row from "./row";

const Grid = ({ currentGuess, guesses, turn }) => {
    return (
        <div className = "grid">
            {guesses.map((guess, i) => {
                if (turn === i) {
                    return <Row key={i} currentGuess={currentGuess} />
                }
                return <Row key={i} guess={guess}/>
            })}
        </div>
    );
};

export default Grid;