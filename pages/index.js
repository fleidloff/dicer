import Link from 'next/link'

import Module from '../components/Module';
import Section from '../components/Section';


export default function Home() {
  return (
   
      <Module>
        <Section>
          <Link href="/todos">
            <button className="button">Todos</button>
          </Link>
        </Section>
          
      </Module>
  )
}
