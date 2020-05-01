import React from "react"
import { collect } from "react-recollect"

import usePusherSubscription from "./usePusherSubscription"
import { rollDie } from "./api"
import Section from "../Section"
import Dice, { isRolling, isRolled } from "../Dice"
import RoomSelection, { mustShowRoomSelection } from "../RoomSelection"

function Qwixx({ store }) {
  usePusherSubscription(store.qwixx)

  if (mustShowRoomSelection()) {
    return <RoomSelection />
  }

  return (
    <Section>
      {isRolled() && store.dice.name === store.qwixx.name && store.dice.hashedId !== store.qwixx.hashedId && (
        <p>
          <b>ACHTUNG! JEMAND HAT DEN GLEICHEN NAMEN WIE DU!</b>
        </p>
      )}
      <p>
        {isRolled() && `${store.dice.name} rolled`}
        {isRolling() && `${store.dice.name} rolls`}&nbsp;
      </p>
      <p></p>
      <Dice />
      <br />
      <br />
      <button className={`button ${isRolling() ? "is-loading" : ""}`} onClick={() => isRolling() || rollDie()}>
        Roll Die
      </button>
    </Section>
  )
}

export default collect(Qwixx)
