import React from "react";
import CardInfo from "./CardInfo";
import { useState } from "react";
import { CardProvider, randomCard, setRandomCard, cards, createCards, data } from "../../context/CardContext";


function CardDisplay(cardResults) {
    const { name, img } = cardResults;
    const [isShown, setIsShown] = useState(false);


    const handleClick = () => {

        setIsShown(true);
    }

    return (
        <div className="row">
            <div className="text txt">Name: {name}</div>
            <button
                onClick={handleClick}
                id="cardImg">
                {img}
            </button>
            {
                isShown && (
                    <CardInfo />
                )
            }
        </div >
    );
}



export default CardDisplay;