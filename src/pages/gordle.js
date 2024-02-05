import React, { useState } from "react";

const Gordle = () => {
    const [solution, setSolution] = useState("brave");

    return (
        <div className="gordle">
            <h1>Gordle</h1>
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