import { store } from "react-recollect"
import { v4 as uuidv4 } from "uuid"

import Qwixx from "./Qwixx"

store.qwixx = {
  channel: "secret",
  name: "",
  id: uuidv4(),
  hashedId: null,
}

if (process.env.NODE_ENV !== "production") {
  store.qwixx.name = "Fred"
}

export default Qwixx
