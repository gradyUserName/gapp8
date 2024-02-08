import React, { useState, useEffect } from "react";
import useGordle from "../hooks/useGordle";
import Grid from "../components/gordle/grid";
import '../styles/gordle.scss';
import Keypad from "../components/gordle/keypad";
import Modal from "../components/gordle/modal";

const Gordle = () => {
    const [solution, setSolution] = useState("brave");
    const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } = useGordle(solution);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        if (isCorrect) {
          window.removeEventListener('keyup', handleKeyUp);
        }

        if (turn > 5) {
          window.removeEventListener('keyup', handleKeyUp);
        }

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp, isCorrect, turn]);

    return (
        <div className="gordle">
            <h1>Gordle</h1>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
            <Keypad usedKeys={usedKeys} />
            <Modal />
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