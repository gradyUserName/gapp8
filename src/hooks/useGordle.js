import { useState } from "react";

const useGordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log("Formatting guess...")
    };

    const addNewGuess = () => {};

    const handleKeyUp = ({ key }) => {
        if (key === 'Enter') {
            if (turn > 5) {
                console.log("Out of guesses")
                return;
            }

            if (history.includes(currentGuess)) {
                console.log("Already guessed that word")
                return;
            }

            if (currentGuess.length !== 5) {
                console.log("Guess is too short")
                return;
            }

            formatGuess();
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            });
            return;
        }

        if(/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;
                });
            }
        }
    };

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp};
};

export default useGordle;