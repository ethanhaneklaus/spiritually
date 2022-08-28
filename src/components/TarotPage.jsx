
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Deck } from "./DeckAnimation";
import YoutubeEmbed from "./YoutubeEmbed";
import CardDisplay from "./CardDisplay";

export default function TarotPage() {

    return (
        <div className="bgc tarotline">

            <div className="txt">
                <h4 className="text">Learn more about tarot first!</h4>
                <YoutubeEmbed embedId="4-CjXCKwj2I" />
            </div>
            <div>
                <CardDisplay />
            </div>
            <div className="displayca">
                <div id="card1" className="pulled"></div>
                <div id="card2" className="pulled"></div>
                <div id="card3" className="pulled"></div>
            </div>
        </div>
    )
}

