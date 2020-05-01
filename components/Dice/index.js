import { store } from "react-recollect"

import Dice from "./Dice"

import { isRolling, isRolled, isInitial, handleRolled } from "./helpers"
export { isRolling, isRolled, isInitial, handleRolled }

export const ROLLING = {
  state: "die-rolling",
}
export const INITIAL = {
  state: "die-initial",
}
export const ROLLED = {
  state: "die-rolled",
}

store.dice = INITIAL

export default Dice
