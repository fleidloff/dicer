import React, { useEffect } from "react"
import Pusher from "pusher-js"
import { key } from "../../config/pusher.json"
import { ROLLING } from "./Dice"

export default function usePusherSubscription(dices) {
  useEffect(() => {
    const pusher = new Pusher(key, {
      cluster: "eu",
      forceTLS: true,
    })

    const channel = pusher.subscribe(dices.channel)
    channel.bind("rolled-die", ({ value, name, id }) => {
      dices.value = ROLLING
      setTimeout(() => {
        // todo: handle user
        dices.value = value
      }, 250)
    })

    return () => {
      pusher.unsubscribe(dices.channel)
    }
  }, [dices.channel])
}
