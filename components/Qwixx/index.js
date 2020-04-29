import { store } from "react-recollect"
import { v4 as uuidv4 } from "uuid"
import { INITIAL } from "../Dice"

import Qwixx from "./Qwixx"

store.qwixx = {
  channel: "secret channel",
  name: "",
  id: uuidv4(),
  hashedId: null,
  value: INITIAL,
  rolling: null,
}

if (process.env.NODE_ENV !== "production") {
  store.qwixx.name = "Fred"
  store.qwixx.channel = "dev"
}

export default Qwixx
