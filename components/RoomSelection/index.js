import { store } from "react-recollect"
import RoomSelection from "./RoomSelection"

export function mustShowRoomSelection() {
  return !store.user.channel || !store.user.name
}

export default RoomSelection
