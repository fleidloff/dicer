import React from "react"
import styles from "./die.module.css"

export default function Die({ value, color }) {
  return <div className={`${styles.die} ${styles[color]}`}>{value || "?"}</div>
}
