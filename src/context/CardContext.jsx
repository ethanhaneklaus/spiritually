import { propTypes } from "react-bootstrap/esm/Image";
import React, { useState, createContext, useContext, useCallBack } from "react";
import Cards from "../components/Cards/tarot-images.json"

export const CardContext = createContext(null);

export default function useCardContext() {
    return useContext(CardContext);
}

export function CardProvider(props) {
    const [randomCard, setRandomCard] = useState([]);
    const [data, setData] = useState(null);

    const createCards = useCallBack(() => {
        const cards = Cards.map(val => {
            let lightShadow = Math.floor(Math.random() * 2) === 0 ? "light" : "shadow";
            return {
                name: val.name,
                img: val.img,
                orientation: lightShadow,
                meaning:
                    lightShadow === "light"
                        ? val.light
                        : val.shadow
            };
        });
        // TODO pull 3 random cards from the array before setting data



        setData(cards)
    });




    return (
        <CardContext.Provider value={{ randomCard, setRandomCard, cards, CardProvider, createCards, data }}>
            {props.children}
        </CardContext.Provider>
    );
}
