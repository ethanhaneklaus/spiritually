
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Deck } from "./DeckAnimation";
import YoutubeEmbed from "./YoutubeEmbed";
import CardDisplay from "./Cards/CardDisplay";
import { CardContext } from "../context/CardContext";
import cards from "./Cards/tarot-images.json"



function TarotPage() {
    const { randomCard, setRandomCard } = useContext(CardContext);
    console.log(randomCard);
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(true);
    }



    return (
        <div className="bgc tarotline">

            <div className="txt">
                <h4 className="text">Learn more about tarot first!</h4>
                <YoutubeEmbed embedId="4-CjXCKwj2I" />
            </div>
            <button
                id="deal"
                onClick="function to execute(randomCard)"
            ></button>
            <div className="pile">

            </div>
            <div className="displayca">
                <CardDisplay />
            </div>
        </div>
    )
}
export default TarotPage;

