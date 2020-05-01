import { store } from "react-recollect"
import RoomSelection from "./RoomSelection"

export function mustShowRoomSelection() {
  return !store.qwixx.channel || !store.qwixx.name
}

export default RoomSelection
