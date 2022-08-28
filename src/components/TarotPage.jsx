
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Deck } from "./Deck";
import YoutubeEmbed from "./YoutubeEmbed";


export default function TarotPage() {

    return (
        <div className="bgc tarotline">

            <div className="txt">
                <h4 className="text">Learn more about tarot first!</h4>
                <YoutubeEmbed embedId="4-CjXCKwj2I" />
            </div>
            <div className="pile">
                <Deck />
                <button
                    className="cardbu"
                ></button>
            </div>
            <div className="displayca">
                <div id="card1" className="pulled"></div>
                <div id="card2" className="pulled"></div>
                <div id="card3" className="pulled"></div>
            </div>
            <button
                className="cardbu2"
            ></button>
            <button
                className="cardbu3"
            ></button>
            <button
                className="cardbu4"
            ></button>

        </div>
    )
}

