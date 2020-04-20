import axios from "axios"
import { ROLLING } from "./Dice"

function rollDie(dices) {
  dices.value = ROLLING
  // todo: prevent double clicking!!!
  axios.post("/api/dices", {
    channel: dices.channel,
    name: dices.name,
    id: dices.id,
    event: "roll-die",
  })
}

export { rollDie }
