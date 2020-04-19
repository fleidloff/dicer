import React, { useEffect } from "react"
import Pusher from "pusher-js"
import { key } from "../../config/pusher.json"

export default function usePusherSubscription(dices) {
  useEffect(() => {
    const pusher = new Pusher(key, {
      cluster: "eu",
      forceTLS: true,
    })

    const channel = pusher.subscribe(dices.channel)
    channel.bind("rolled-die", ({ value }) => {
      dices.value = value
    })

    return () => {
      pusher.unsubscribe(dices.channel)
    }
  }, [dices.channel])
}
