import React from "react"
import { collect } from "react-recollect"

import usePusherSubscription from "./usePusherSubscription"
import { rollDie } from "./api"
import Section from "../Section"
import Dice, { isRolling, isRolled } from "../Dice"
import RoomSelection from "../RoomSelection"

function Qwixx({ store }) {
  usePusherSubscription(store.qwixx)

  if (!store.qwixx.channel || !store.qwixx.name) {
    return <RoomSelection />
  }

  return (
    <Section>
      {isRolled() && store.qwixx.dice.name === store.qwixx.name && store.qwixx.dice.hashedId !== store.qwixx.hashedId && (
        <p>
          <b>ACHTUNG! JEMAND HAT DEN GLEICHEN NAMEN WIE DU!</b>
        </p>
      )}
      <p>
        {isRolled() && `${store.qwixx.dice.name} rolled`}
        {isRolling() && `${store.qwixx.dice.name} rolls`}&nbsp;
      </p>
      <p></p>
      <Dice />
      <br />
      <br />
      <button
        className={`button ${isRolling() ? "is-loading" : ""}`}
        onClick={() => isRolling() || rollDie(store.qwixx)}
      >
        Roll Die
      </button>
    </Section>
  )
}

export default collect(Qwixx)
