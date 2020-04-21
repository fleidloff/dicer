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

  console.log(store.qwixx.name, store.qwixx.hashedId, store.qwixx.value.hashedId)

  return (
    <Section>
      {store.qwixx.value.name === store.qwixx.name && store.qwixx.value.hashedId !== store.qwixx.hashedId && (
        <p>
          <b>ACHTUNG! JEMAND HAT DEN GLEICHEN NAMEN WIE DU!</b>
        </p>
      )}
      <p>{store.qwixx.value.name && `${store.qwixx.value.name} rolled`}&nbsp;</p>
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
