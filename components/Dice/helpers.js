import { store } from "react-recollect"
import { ROLLING, ROLLED, INITIAL } from "./index"

export function isRolling() {
  return store.qwixx.dice.state === ROLLING.state
}

export function isRolled() {
  return store.qwixx.dice.state === ROLLED.state
}

export function isInitial() {
  return store.qwixx.dice.state === INITIAL.state
}
