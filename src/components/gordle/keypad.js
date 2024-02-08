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

    return (
        <div className="keypad">
            {letters.map((row, rowIndex) => (
                <div key={rowIndex} className="kb-row">
                    {row.map((key) => {
                        const color = usedKeys[key];
                        return (
                            <div key={key} className={color}>{key}</div>
                        )
                    })}
                </div>
            ))}
        </div>
    );
};

export default Keypad;