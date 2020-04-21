import shortHash from "short-hash"
import pusher from "./pusher"
import random from "random"

function getRandomDiceRoll() {
  return random.int(1, 6)
}

export default function handleRollDie({ channel, name, id }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(reject, 3000)

    const hashedId = shortHash(id)

    pusher.trigger(
      channel,
      "rolled-die",
      {
        value: {
          red: getRandomDiceRoll(),
          yellow: getRandomDiceRoll(),
          green: getRandomDiceRoll(),
          blue: getRandomDiceRoll(),
          white1: getRandomDiceRoll(),
          white2: getRandomDiceRoll(),
          name,
          hashedId,
        },
      },
      () => {
        clearTimeout(timeout)
        resolve(hashedId)
      }
    )
  })
}
