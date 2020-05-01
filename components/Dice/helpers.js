import { store } from "react-recollect"
import { ROLLING, ROLLED, INITIAL } from "./index"

export function isRolling() {
  return store.dice.state === ROLLING.state
}

export function isRolled() {
  return store.dice.state === ROLLED.state
}

export function isInitial() {
  return store.dice.state === INITIAL.state
}

export function handleRolled({ value }) {
  store.dice = { ...ROLLING, name: value.name }
  setTimeout(() => {
    store.dice = { ...ROLLED, ...value }
  }, 500)
}
