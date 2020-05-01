import React from "react"
import { collect } from "react-recollect"

import usePusherSubscription from "./usePusherSubscription"
import { rollDie } from "./api"
import Section from "../Section"
import Dice, { isRolling, isRolled } from "../Dice"
import User from "../User"
import RoomSelection, { mustShowRoomSelection } from "../RoomSelection"

function Qwixx({ store }) {
  usePusherSubscription(store.user)

  if (mustShowRoomSelection()) {
    return <RoomSelection />
  }

  return (
    <Section>
      <User />
      <Dice />
      <br />
      <button className={`button ${isRolling() ? "is-loading" : ""}`} onClick={() => isRolling() || rollDie()}>
        Roll Die
      </button>
    </Section>
  )
}

export default collect(Qwixx)
