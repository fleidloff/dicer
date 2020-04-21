import Pusher from "pusher"
import publicSettings from "../../config/pusher.json"

import dotenv from "dotenv"
// todo: move dotenv config somewhere else
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const secretSettings = {
  appId: process.env.PUSHER_APP_ID,
  secret: process.env.PUSHER_SECRET,
}

const pusher = new Pusher({ ...secretSettings, ...publicSettings })

export default pusher
