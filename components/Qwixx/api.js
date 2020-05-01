import axios from "axios"
import { store } from "react-recollect"
import { ROLLING } from "../Dice"

function rollDie() {
  // todo: new state for initiated rolling with abort condition after 4 seconds
  store.dice = { ...ROLLING, name: store.qwixx.name }

  axios
    .post("/api/qwixx", {
      channel: store.qwixx.channel,
      name: store.qwixx.name,
      id: store.qwixx.id,
      event: "roll-die",
    })
    .then(res => {
      store.qwixx.hashedId = res.data.hashedId
    })
}

export { rollDie }
