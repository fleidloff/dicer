import React from "react"
import { collect } from "react-recollect"

import usePusherSubscription from "./usePusherSubscription"
import { rollDie } from "./api"
import Section from "../Section"

function Dices({ store }) {
  usePusherSubscription(store.dices)

  return (
    <Section>
      {store.dices.value}
      <br />
      <br />
      <button className="button" onClick={() => rollDie(store.dices.channel)}>
        Roll Die
      </button>
    </Section>
  )
}

export default collect(Dices)
