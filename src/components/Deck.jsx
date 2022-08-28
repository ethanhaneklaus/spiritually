import React, { useState } from "react";
import { useSprings, animated, to } from "react-spring";
import { useGesture } from "react-use-gesture";
const tarotDeck = [
    "./cards/ar00.jpg",
    "./cards/ar01.jpg",
    "./cards/ar02.jpg",
    "./cards/ar03.jpg",
    "./cards/ar04.jpg",
    "./cards/ar05.jpg",
    "./cards/ar06.jpg",
    "./cards/ar07.jpg",
    "./cards/ar08.jpg",
    "./cards/ar09.jpg",
    "./cards/ar10.jpg",
    "./cards/ar11.jpg",
    "./cards/ar12.jpg",
    "./cards/ar13.jpg",
    "./cards/ar14.jpg",
    "./cards/ar15.jpg",
    "./cards/ar16.jpg",
    "./cards/ar17.jpg",
    "./cards/ar18.jpg",
    "./cards/ar19.jpg",
    "./cards/ar20.jpg",
    "./cards/ar21.jpg",
    "./cards/cu02.jpg",
    "./cards/cu03.jpg",
    "./cards/cu04.jpg",
    "./cards/cu05.jpg",
    "./cards/cu06.jpg",
    "./cards/cu07.jpg",
    "./cards/cu08.jpg",
    "./cards/cu09.jpg",
    "./cards/cu10.jpg",
    "./cards/cuac.jpg",
    "./cards/cuki.jpg",
    "./cards/cukn.jpg",
    "./cards/cupa.jpg",
    "./cards/cuqu.jpg",
    "./cards/pe02.jpg",
    "./cards/pe03.jpg",
    "./cards/pe04.jpg",
    "./cards/pe05.jpg",
    "./cards/pe06.jpg",
    "./cards/pe07.jpg",
    "./cards/pe08.jpg",
    "./cards/pe09.jpg",
    "./cards/pe10.jpg",
    "./cards/peac.jpg",
    "./cards/peki.jpg",
    "./cards/pekn.jpg",
    "./cards/pepa.jpg",
    "./cards/pequ.jpg",
    "./cards/sw02.jpg",
    "./cards/sw03.jpg",
    "./cards/sw04.jpg",
    "./cards/sw05.jpg",
    "./cards/sw06.jpg",
    "./cards/sw07.jpg",
    "./cards/sw08.jpg",
    "./cards/sw09.jpg",
    "./cards/sw10.jpg",
    "./cards/swac.jpg",
    "./cards/swki.jpg",
    "./cards/swkn.jpg",
    "./cards/swpa.jpg",
    "./cards/swqu.jpg",
    "./cards/wa02.jpg",
    "./cards/wa03.jpg",
    "./cards/wa04.jpg",
    "./cards/wa05.jpg",
    "./cards/wa06.jpg",
    "./cards/wa07.jpg",
    "./cards/wa08.jpg",
    "./cards/wa09.jpg",
    "./cards/wa10.jpg",
    "./cards/waac.jpg",
    "./cards/waki.jpg",
    "./cards/wakn.jpg",
    "./cards/wapa.jpg",
    "./cards/waqu.jpg",
]
const toLoc = i => ({ x: 631, y: -188, scale: 1, rot: -10 + Math.random() * 20, delay: i * 30 })
const from = i => ({ x: 635, rot: 0, scale: 1.5, y: -400 })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
    }
    return (
        array
    )
}
export function Deck() {
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
        <div>
            <animated.div
                className="card-outer-div"
                key={i}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    // top: "400px",
                    // left: "px",
                    position: "absolute",
                }}
            >
                { }
                <animated.div
                    className="card"
                    {...bind(i)}
                    style={{
                        transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
                        backgroundImage: `url(${cards[i]})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </animated.div>
        </div>
    ))
}