import React, { useState, useEffect } from "react";

const lettersObject = {
    "letters": [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["z", "x", "c", "v", "b", "n", "m"]
    ]
}

const Keypad = ({ usedKeys }) => {
    const [letters, setLetters] = useState(lettersObject.letters);

    const simulateKeyUp = (key) => {
        const event = new KeyboardEvent("keyup", { key });
        window.dispatchEvent(event);
    };

    return (
        <div className="keypad">
            {letters.map((row, rowIndex) => (
                <div key={rowIndex} className="kb-row">
                    {row.map((key) => {
                        const color = usedKeys[key];
                        return (
                            <button key={key} className={color} onClick={() => simulateKeyUp(key)}>{key}</button>
                        )
                    })}
                </div>
            ))}
        </div>
    );
};

export default Keypad;