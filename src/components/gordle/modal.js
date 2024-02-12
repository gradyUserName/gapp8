import React from "react";

const Modal = ({ isCorrect, turn, solution }) => {
    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You win!</h1>
                    <p>Solution: </p>
                    <p className="solution">{solution}</p>
                    <p>You guessed the correct word in {turn} turns.</p>
                </div>
            )}

            {!isCorrect && (
                <div>
                    <h1>Out of turns...</h1>
                    <p>Solution: </p>
                    <p className="solution">{solution}</p>
                    <p>Better luck next time!</p>
                </div>
            )}
        </div>
    );
};

export default Modal;