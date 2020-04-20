import React from "react"
import { collect } from "react-recollect"

import usePusherSubscription from "./usePusherSubscription"
import { rollDie } from "./api"
import Section from "../Section"
import Die from "./Die"

function Dices({ store }) {
  usePusherSubscription(store.dices)

  return (
    <Section>
      <Die value={store.dices.value} />
      <br />
      <br />
      <button className="button" onClick={() => rollDie(store.dices)}>
        Roll Die
      </button>
    </Section>
  )
}

export default collect(Dices)
