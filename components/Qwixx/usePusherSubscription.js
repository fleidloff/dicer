import React, { useEffect } from "react"
import Pusher from "pusher-js"
import { key } from "../../config/pusher.json"
import { ROLLING } from "../Dice"

export default function usePusherSubscription(qwixx) {
  useEffect(() => {
    const pusher = new Pusher(key, {
      cluster: "eu",
      forceTLS: true,
    })

    const channel = pusher.subscribe(qwixx.channel)
    channel.bind("rolled-die", ({ value, name, id }) => {
      qwixx.value = ROLLING
      setTimeout(() => {
        // todo: handle user
        qwixx.value = value
      }, 250)
    })

    return () => {
      pusher.unsubscribe(qwixx.channel)
    }
  }, [qwixx.channel])
}
