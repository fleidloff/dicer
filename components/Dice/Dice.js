import { collect } from "react-recollect"
import Die from "./Die"
import styles from "./dice.module.css"
import { INITIAL, ROLLING } from "./index"

function Dice({ store }) {
  const { dice } = store
  if (!dice.state) {
    return ""
  }

  return (
    <div className={styles.dice}>
      <Die value={dice.red} color="red" />
      <Die value={dice.yellow} color="yellow" />
      <Die value={dice.white2} color="white" />
      <Die value={dice.green} color="green" />
      <Die value={dice.blue} color="blue" />
      <Die value={dice.white1} color="white2" />
    </div>
  )
}

export default collect(Dice)
