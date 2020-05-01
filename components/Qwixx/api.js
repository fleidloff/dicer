import axios from "axios"
import { store } from "react-recollect"
import { ROLLING } from "../Dice"

export const ERROR_ID = "ERROR"

function rollDie() {
  // todo: new state for initiated rolling with abort condition after 4 seconds
  store.dice = { ...ROLLING, name: store.user.name }

  axios
    .post("/api/qwixx", {
      channel: store.user.channel,
      name: store.user.name,
      id: store.user.id,
      event: "roll-die",
    })
    .then(res => {
      store.user.hashedId = res.data.hashedId
    })
    .catch(err => {
      store.user.hashedId = ERROR_ID
    })
}

export { rollDie }
