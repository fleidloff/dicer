import axios from "axios"
import { ROLLING } from "./Die"

function rollDie(dices) {
  dices.value = ROLLING
  // todo: prevent double clicking!!!
  axios.post("/api/dices", {
    channel: dices.channel,
    event: "roll-die",
  })
}

export { rollDie }
