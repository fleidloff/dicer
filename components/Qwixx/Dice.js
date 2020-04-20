import Die from "./Die"
import styles from "./die.module.css"

export const ROLLING = "die-rolling"
export const INITIAL = "die-initial"

export default function Dice({ value, color = "white" }) {
  switch (value) {
    case INITIAL:
    case ROLLING:
      return (
        <div className={styles.dice}>
          <Die value={"?"} color="red" />
          <Die value={"?"} color="yellow" />
          <Die value={"?"} color="green" />
          <Die value={"?"} color="blue" />
          <Die value={"?"} color="white" />
          <Die value={"?"} color="white" />
        </div>
      )
    case null:
      return ""
    default:
      return (
        <div className={styles.dice}>
          <Die value={value.red} color="red" />
          <Die value={value.yellow} color="yellow" />
          <Die value={value.green} color="green" />
          <Die value={value.blue} color="blue" />
          <Die value={value.white1} color="white" />
          <Die value={value.white2} color="white" />
        </div>
      )
  }
}
