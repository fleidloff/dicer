import { store } from "react-recollect"
import { v4 as uuidv4 } from "uuid"

import Qwixx from "./Qwixx"

store.dices = {
  channel: "freds-channel",
  name: "Fred",
  id: uuidv4(),
  value: null,
}

export default Qwixx
