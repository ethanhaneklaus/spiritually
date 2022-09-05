import { propTypes } from "react-bootstrap/esm/Image";
import React, { useState, createContext } from "react";
import { useContext } from "react";


export const CardContext = createContext(null);

export default function useCardContext() {
    return useContext(CardContext);
}

export CardProvider(props) {
    const [randomCard, setRandomCard] = useState([]);
    const [data, setData] = useState(null);

    const createCards = useCallBack((cards) => {
        function pullCards() {
            const cards = response.data.data.map(val => {
                let lightShadow = Math.floor(Math.random() * 3) === 0 ? "light" : "shadow";
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
            setData(cards)
        };
    });




    return (
        <CardContext.Provider value={{ randomCard, setRandomCard, cards, CardProvider, createCards, data }}>
            {props.children}
        </CardContext.Provider>
    );
}
