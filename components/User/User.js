import { collect } from "react-recollect"

import { isRolling, isRolled } from "../Dice"
import { ERROR_ID } from "../Qwixx/api.js"

function renderUserDuplicate(store) {
  if (store.user.hashedId === ERROR_ID) return
  if (isRolled() && store.dice.name === store.user.name && store.dice.hashedId !== store.user.hashedId) {
    return (
      <p>
        <b>ACHTUNG! JEMAND HAT DEN GLEICHEN NAMEN WIE DU!</b>
      </p>
    )
  }
  return null
}

function User({ store }) {
  return (
    <>
      {renderUserDuplicate(store)}
      <p>
        {isRolled() && `${store.dice.name} rolled`}
        {isRolling() && `${store.dice.name} rolls`}&nbsp;
      </p>
    </>
  )
}

export default collect(User)
