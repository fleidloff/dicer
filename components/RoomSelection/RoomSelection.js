import React, { useState } from "react"
import { collect } from "react-recollect"

import Section from "../Section"

function RoomSelection({ store }) {
  const [name, setName] = useState(store.user.name)
  const [channel, setChannel] = useState(store.user.channel)

  function handleSubmit() {
    store.user.name = name
    store.user.channel = encodeURIComponent(channel.replace(" ", ""))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section title="Choose name and channel">
        <div className="container is-desktop">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <input
                  className="input"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={ev => setName(ev.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Channel</label>
            </div>
            <div className="field-body">
              <div className="field">
                <input
                  className="input"
                  type="text"
                  placeholder="Secret Place"
                  value={channel}
                  onChange={ev => setChannel(ev.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal"></div>
            <div className="field-body">
              <div className="field">
                <button type="submit" className="button is-link">
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </form>
  )
}

export default collect(RoomSelection)
