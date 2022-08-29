import { propTypes } from "react-bootstrap/esm/Image";
import React, { useState, createContext } from "react";

export const CardContext = createContext(null);

export function CardProvider(cards) {
    const [randomCard, setRandomCard] = useState([]);


    return (
        <CardContext.Provider value={{ randomCard, setRandomCard }}>
            {propTypes.children}
        </CardContext.Provider>
    );
}
