import Die from "./Die"
import styles from "./die.module.css"
import { INITIAL, ROLLING } from "./index"

export default function Dice({ value, color = "white" }) {
  switch (value) {
    case null:
      return ""
    case INITIAL:
    case ROLLING:
    default:
      return (
        <div className={styles.dice}>
          <Die value={value.red} color="red" />
          <Die value={value.yellow} color="yellow" />
          <Die value={value.white2} color="white" />
          <Die value={value.green} color="green" />
          <Die value={value.blue} color="blue" />
          <Die value={value.white1} color="white2" />
        </div>
      )
  }
}
