import { store } from "react-recollect"
import { v4 as uuidv4 } from "uuid"
import { INITIAL } from "../Dice"

import Qwixx from "./Qwixx"

store.qwixx = {
  channel: "freds-channel",
  name: "Fred",
  id: uuidv4(),
  hashedId: null,
  value: INITIAL,
}

export default Qwixx
