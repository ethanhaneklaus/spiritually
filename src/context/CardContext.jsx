import { propTypes } from "react-bootstrap/esm/Image";
import React, { useState, createContext } from "react";

export const CardContext = createContext(null);

export default function CardProvider(props) {
    const [cardResults, setCardResults] = useState([]);
    const [card] = useState([]);

    return (
        <CardProvider value={{ cardResults, setCardResults, card }}>
            {propTypes.children}
        </CardProvider>
    );
}
