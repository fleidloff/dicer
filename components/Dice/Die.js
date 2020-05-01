import React from "react"
import styles from "./die.module.css"

export default function Die({ value, color }) {
  return (
    <div className={`${styles.die} ${styles[color]}`}>
      {getMapping(value).map((showDot, idx) => (
        <div key={idx} className={styles.dot}>
          {showDot ? "•" : ""}
        </div>
      ))}
    </div>
  )
}

function getMapping(value) {
  return mapping[value] || [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

const mapping = {
  1: [0, 0, 0, 0, 1, 0, 0, 0, 0],
  2: [1, 0, 0, 0, 0, 0, 0, 0, 1],
  3: [0, 0, 1, 0, 1, 0, 1, 0, 0],
  4: [1, 0, 1, 0, 0, 0, 1, 0, 1],
  5: [1, 0, 1, 0, 1, 0, 1, 0, 1],
  6: [1, 0, 1, 1, 0, 1, 1, 0, 1],
}
