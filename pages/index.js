import Link from "next/link"
import React from "react"

import Module from "../components/Module"
import Section from "../components/Section"

export default function Home() {
  return (
    <Module>
      <Section>
        <Link href="/todos">
          <button className="button">Todos</button>
        </Link>
        <Link href="/dices">
          <button className="button">Dices</button>
        </Link>
      </Section>
    </Module>
  )
}
