import React from "react";
import CardInfo from "./CardInfo";
import { useState } from "react";


function CardDisplay(cardResults) {
    const { name, img } = cardResults;
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(true);
    }

    return (
        <div>
            <div className="text txt">Name: {name}</div>
            <div
                onClick={handleClick}
                id="cardImg">
                {img}
            </div>
            {isShown && (
                <CardInfo />
            )}
        </div>
    );
}

export default CardDisplay;