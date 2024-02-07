import React, { useState, useEffect } from "react";
import useGordle from "../hooks/useGordle";
import Grid from "../components/gordle/grid";
import '../styles/gordle.scss';

const Gordle = () => {
    const [solution, setSolution] = useState("brave");
    const { currentGuess, handleKeyUp, guesses, isCorrect, turn } = useGordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    return (
        <div className="gordle">
            <h1>Gordle</h1>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        </div>
    );
};

export default Gordle;

export const Head = () => {
    return (
      <>
        <title>Gordle</title>
        <html lang="en" />
      </>
    );
  };