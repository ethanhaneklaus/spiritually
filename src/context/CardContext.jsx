import React, { useState, createContext, useContext, useCallBack } from "react";
import Cards from "../components/Cards/tarotcards.json"

export const CardContext = createContext(null);

export default function useCardContext() {
    return useContext(CardContext);
}

export function CardProvider(props) {
    const [randomCard, setRandomCard] = useState([]);
    const [data, setData] = useState(null);
    const [cards, setCards] = useState([]);


    function shuffleCards(Cards) {

        let temp = null;
        for (cards = Cards.length - 1; Cards > 0; Cards -= 1) {
            temp = cards[{}]
        }
        console.log(cards)
        return cards;
    };

    const createCards = (() => {
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
        setCards(cards)
        // TODO pull 3 random cards from the array before setting data
    });

    return (
        <CardContext.Provider value={{ randomCard, setRandomCard, Cards, cards, CardProvider, createCards, data, shuffleCards }}>
            {props.children}
        </CardContext.Provider>
    );
}
