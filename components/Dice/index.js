import Dice from "./Dice"
import { isRolling, isRolled, isInitial } from "./helpers"

export { isRolling, isRolled, isInitial }

export const ROLLING = {
  state: "die-rolling",
}
export const INITIAL = {
  state: "die-initial",
}
export const ROLLED = {
  state: "die-rolled",
}

export default Dice
