import Link from 'next/link'
import React, { useEffect } from 'react';
import Pusher from 'pusher-js';

import { key } from '../config/pusher.json';
import Module from '../components/Module';
import Section from '../components/Section';


export default function Home() {

  useEffect(() => {
    Pusher.logToConsole = false;

    const pusher = new Pusher(key, {
      cluster: 'eu',
      forceTLS: true
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      console.log(JSON.stringify(data));
    });
  }, []);

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
