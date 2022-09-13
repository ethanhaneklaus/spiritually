
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Deck } from "./DeckAnimation";
import YoutubeEmbed from "./YoutubeEmbed";
import CardDisplay from "./Cards/CardDisplay";
import { CardContext, shuffleCards } from "../context/CardContext";



function TarotPage() {
    // const { randomCard, setRandomCard } = useContext(CardContext);
    // console.log(randomCard);

    // const dealBttn = document.getElementById("deal");
    // dealBttn.addEventListener("click", () => {
    //     cards = shuffleCards(cards);

    // })

    return (
        <div className="bgc tarotline">

            <div className="txt">
                <h4 className="text">Learn more about tarot first!</h4>
                <YoutubeEmbed embedId="4-CjXCKwj2I" />
            </div>
            <button
                id="deal"
                onClick="
                    shuffleCards(),
                    pullCards(),"
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

