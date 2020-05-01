import { store } from "react-recollect"
import { v4 as uuidv4 } from "uuid"

import User from "./User"

store.user = {
  channel: "secret",
  name: "",
  id: uuidv4(),
  hashedId: null,
}

if (process.env.NODE_ENV !== "production") {
  store.user.name = "Fred"
}

export default User
