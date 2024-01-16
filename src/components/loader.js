import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({ finishLoading }) => {
    useEffect(() => {
        const timeout = setTimeout(() => finishLoading(), 2000);
        return () => clearTimeout(timeout)
    }, []);

    return (
        <Oval
        color="#FFE733"
        />
    );
};

export default Loader;