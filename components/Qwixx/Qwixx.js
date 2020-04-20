import React from "react"
import { collect } from "react-recollect"

import usePusherSubscription from "./usePusherSubscription"
import { rollDie } from "./api"
import Section from "../Section"
import Dice, { ROLLING } from "./Dice"
import RoomSelection from "./RoomSelection"

function Qwixx({ store }) {
  usePusherSubscription(store.dices)

  if (!store.dices.channel || !store.dices.name) {
    return <RoomSelection />
  }

  const isRolling = store.dices.value === ROLLING

  return (
    <Section>
      <Dice value={store.dices.value} />
      <br />
      <br />
      <button className={`button ${isRolling ? "is-loading" : ""}`} onClick={() => isRolling || rollDie(store.dices)}>
        Roll Die
      </button>
    </Section>
  )
}

export default collect(Qwixx)
