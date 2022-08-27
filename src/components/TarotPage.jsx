
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Deck } from "./Deck";
import YoutubeEmbed from "./YoutubeEmbed";


export default function TarotPage() {

    return (
        <div className="bgc">

            <div className="txt">
                <h4 className="text">Learn more about tarot first!</h4>
                <YoutubeEmbed embedId="4-CjXCKwj2I" />
            </div>

            <Deck />
            <button
                className="cardbu"
            ></button>

            <div className="carddis">
                <div id="card1" className="card">asdf</div>
                <div id="card2" className="card">asdf</div>
                <div id="card3" className="card">asdf</div>
            </div>

        </div>
    )
}

