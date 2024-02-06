import React from "react";

const Row = ({ guess }) => {
    if (guess) {
        return (
            <div className="row past">
                {guess.map((l, i) => {
                    return <div key={i} className={l.key}>{l.key}</div>
                })}
            </div>
        );
    }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Row;