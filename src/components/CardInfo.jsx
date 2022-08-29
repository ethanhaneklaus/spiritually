import React, { useState } from "react";
import cards from "./Cards/tarot-images.json"

function CardInfo(cardInfo) {
    const { Archetype, Elemental, arcana, keywords, meanings, Spiritual, Questions } = cardInfo;
    return (
        <div className="wrap">
            <div className="text txt">Archetype: {Archetype}</div>
            <div className="text txt">Element: {Elemental}</div>
            <div className="text txt">Arcana: {arcana}</div>
            <div className="text txt">Keywords: {keywords}</div>
            <div className="text txt">Meaning: {meanings}</div>
            <div className="text txt">Spiritual Meaning: {Spiritual}</div>
            <div className="text txt">Questions to ask yourself: {Questions}</div>
        </div>
    );
}

export default CardInfo;