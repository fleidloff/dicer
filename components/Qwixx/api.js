import axios from "axios"
import { ROLLING } from "../Dice"

function rollDie(qwixx) {
  qwixx.value = ROLLING
  // todo: prevent double clicking!!!
  axios.post("/api/qwixx", {
    channel: qwixx.channel,
    name: qwixx.name,
    id: qwixx.id,
    event: "roll-die",
  })
}

export { rollDie }
