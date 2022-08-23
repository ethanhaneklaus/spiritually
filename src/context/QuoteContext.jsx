import React, { useState, createContext } from "react";

export const QuoteContext = createContext(null);

export function QuoteProvider(props) {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <QuoteContext.Provider value={{ searchResults, setSearchResults }}>
            {props.children}
        </QuoteContext.Provider>
    );
}
