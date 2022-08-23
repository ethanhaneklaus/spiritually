import React, { useState, useCallback, createContext } from "react";

export const FavoritesContext = createContext(null);

export function FavoritesProvider(props) {
    const [favorites, setFavorites] = useState([]);

    const add = useCallback(
        (quote) => setFavorites((curr) => [...curr, quote]),
        [setFavorites]
    );

    const remove = useCallback(
        (_id) => {
            setFavorites((curr) => curr.filter((val) => val._id !== _id));
        },
        [setFavorites]
    );

    const clear = useCallback(() => {
        setFavorites([]);
    }, [setFavorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, add, remove, clear }}>
            {props.children}
        </FavoritesContext.Provider>
    );
}