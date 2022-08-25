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

function Deck() {
    const cards = shuffleArray(tarotDeck)
    const [gone] = useState(() => new Set())
    const [props, set] = useSprings(cards.length, i => ({ ...toLoc(i), from: from(i) }))
    const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2
        const dir = xDir < 0 ? -1 : 1
        if (!down && trigger) gone.add(index)
        set(i => {
            if (index !== i) return
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
            const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
            const scale = down ? 1.1 : 1
            return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
        })
        if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => toLoc(i)), 600)
    })

    return props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
            {

            }
            <animated.div {...bind(i)} style={{ transform: to([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
        </animated.div>
    ))
}

render(<Deck />, document.getElementById('root'))

export default { shuffleArray, Deck };