import { useState } from "react";

const useGordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {};

    const addNewGuess = () => {};

    const handleKeyUp = () => {};
};

export default useGordle;