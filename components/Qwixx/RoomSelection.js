import React, { useState } from "react"
import { collect } from "react-recollect"

import Section from "../Section"

function RoomSelection({ store }) {
  const [name, setName] = useState(store.dices.name)
  const [channel, setChannel] = useState(store.dices.channel)

  function handleEnter() {
    store.dices.name = name
    store.dices.channel = encodeURIComponent(channel.replace(" ", ""))
  }

  return (
    <Section title="Choose a room">
      <div className="field is-horizontal">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
        </div>
      </div>
      <div className="field is-horizontal">
        <label className="label">Room</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Secret Place"
            value={channel}
            onChange={ev => setChannel(ev.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-link" onClick={handleEnter}>
            Enter
          </button>
        </div>
      </div>
    </Section>
  )
}

export default collect(RoomSelection)
