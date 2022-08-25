import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, to } from 'react-spring'
import { useGesture } from 'react-use-gesture'

const tarotDeck = [
    "https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck"
]

const toLoc = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}
