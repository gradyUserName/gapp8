import React, { useState, useEffect } from "react";
import useGordle from "../hooks/useGordle";

const Gordle = () => {
    const [solution, setSolution] = useState("brave");
    const { currentGuess, handleKeyUp } = useGordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    return (
        <div className="gordle">
            <h1>Gordle</h1>
            <p>{currentGuess}</p>
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