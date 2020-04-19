import axios from "axios"

function rollDie(channel) {
  // todo: permit double clicking
  axios.post("/api/dices", {
    channel,
    event: "roll-die",
  })
}

export { rollDie }
