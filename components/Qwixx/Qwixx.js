import React from "react"
import { collect } from "react-recollect"

import usePusherSubscription from "./usePusherSubscription"
import { rollDie } from "./api"
import Section from "../Section"
import Dice, { ROLLING } from "../Dice"
import RoomSelection from "../RoomSelection"

function Qwixx({ store }) {
  usePusherSubscription(store.qwixx)

  if (!store.qwixx.channel || !store.qwixx.name) {
    return <RoomSelection />
  }

  const isRolling = store.qwixx.value === ROLLING

  return (
    <Section>
      <Dice value={store.qwixx.value} />
      <br />
      <br />
      <button className={`button ${isRolling ? "is-loading" : ""}`} onClick={() => isRolling || rollDie(store.qwixx)}>
        Roll Die
      </button>
    </Section>
  )
}

export default collect(Qwixx)
