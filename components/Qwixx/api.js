import axios from "axios"
import { ROLLING } from "../Dice"

function rollDie(qwixx) {
  // todo: new state for initiated rolling with abort condition after 4 seconds
  qwixx.value = ROLLING
  axios
    .post("/api/qwixx", {
      channel: qwixx.channel,
      name: qwixx.name,
      id: qwixx.id,
      event: "roll-die",
    })
    .then(res => {
      qwixx.hashedId = res.data.hashedId
    })
}

export { rollDie }
