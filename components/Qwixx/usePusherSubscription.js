import React, { useEffect } from "react"
import Pusher from "pusher-js"
import { key } from "../../config/pusher.json"
import { handleRolled } from "../Dice"

export default function usePusherSubscription(user) {
  useEffect(() => {
    if (!user.channel) {
      return
    }
    console.log("subscribe", user.channel)
    const pusher = new Pusher(key, {
      cluster: "eu",
      forceTLS: true,
    })

    pusher.connection.bind("error", function (err) {
      if (err.error.data.code === 4004) {
        // todo: handle error
        console.error("Over limit.")
      }
    })

    const channel = pusher.subscribe(user.channel)

    channel.bind("rolled-die", handleRolled)

    return () => {
      console.log("unsubscribe")
      pusher.unsubscribe(qwixx.channel)
    }
  }, [user.channel])
}
