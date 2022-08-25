import React, { useState, createContext } from "react";

export const QuoteContext = createContext(null);

export function QuoteProvider(props) {
    const [quoteResults, setQuoteResults] = useState([]);
    const [quote] = useState([]);

    return (
        <QuoteContext.Provider value={{ quoteResults, setQuoteResults, quote }}>
            {props.children}
        </QuoteContext.Provider>
    );
}
