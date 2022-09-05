import React, { useState } from "react";

function CardInfo(cards) {
    return (
        <div className="wrap">
            <div className="text txt">Archetype: {"Archetype"}</div>
            <div className="text txt">Element: {"Elemental"}</div>
            <div className="text txt">Arcana: {"arcana"}</div>
            <div className="text txt">Keywords: {"keywords"}</div>
            <div className="text txt">Meaning: {"meanings"}</div>
            <div className="text txt">Spiritual Meaning: {"Spiritual"}</div>
            <div className="text txt">Questions to ask yourself: {"Questions"}</div>
        </div>
    );
}




// const cards = response.data.data.cards.map(val => {
//     let lightSahdow = Math.floor(Math.random() * 3) === 0 ? "light" : "shadow";
//     return {

//         Archetype: val.Archetype,
//         Element: val.Element,
//         Arcana: val.Arcana,
//         Keywords: val.Keywords,
//         Meaning: val.Meaning,
//         Spiritual Meaning: val.Spiritual,
//         Questions to ask yourself: val.Questions,
//         lightShadow === "light"
//         ? val.light
//         : val.shadow

// }
// });

// seteData(cards);
