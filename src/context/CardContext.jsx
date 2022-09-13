import React, { useState, createContext, useContext, useCallBack } from "react";
import cards from "../components/Cards/tarotcards.json";

export const CardContext = createContext(null);

export function shuffleCards(cards) {
    cards.sort(() => (Math.floor(Math.random) > 0.5 ? 1 : -1));
    console.log(shuffleCards);
}

export function pullCards(cards) {
    const pullCards = cards.slice(0, 3);
    console.log(pullCards);
};

export function CardProvider(props) {
    const [data, setData] = useState(null);
    let lightShadow = Math.floor(Math.random() * 2) === 0 ? "light" : "shadow";
    const cards = cards.map(val => {
        return {
            name: val.name,
            img: val.img,
            meanings:
                lightShadow === "light"
                    ? val.light
                    : val.shadow,
            Archetype: val.Archetype,
            Element: val.Element,
            Arcana: val.Arcana,
            Keywords: val.Keywords,
            Spiritual: val.Spiritual,
            Question: val.Question,
        };
    });


    return (
        <CardContext.Provider value={{ pullCards, cards, CardProvider, data, shuffleCards }}>
            {props.children}
        </CardContext.Provider>
    );
}