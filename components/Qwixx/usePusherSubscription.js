import React, { useEffect } from "react"
import Pusher from "pusher-js"
import { key } from "../../config/pusher.json"
import { ROLLING, ROLLED } from "../Dice"

export default function usePusherSubscription(qwixx) {
  useEffect(() => {
    const pusher = new Pusher(key, {
      cluster: "eu",
      forceTLS: true,
    })

    pusher.connection.bind("error", function (err) {
      if (err.error.data.code === 4004) {
        // todo: handle error
        console.error("Over limit!")
      }
    })

    const channel = pusher.subscribe(qwixx.channel)

    channel.bind("rolled-die", ({ value }) => {
      qwixx.dice = { ...ROLLING, name: value.name }
      setTimeout(() => {
        qwixx.dice = { ...ROLLED, ...value }
      }, 500)
    })

    return () => {
      console.log("unsubscribe")
      pusher.unsubscribe(qwixx.channel)
    }
  }, [qwixx.channel])
}
