import React from "react";
import Row from "./row";

const Grid = ({ currentGuess, guesses, turn }) => {
    return (
        <div className = "grid">
            {guesses.map((guess, i) => {
                return <Row key={i} />
            })}
        </div>
    );
};

export default Grid;