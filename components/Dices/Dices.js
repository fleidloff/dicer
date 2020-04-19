import React, { useEffect } from 'react';
import { collect } from 'react-recollect';
import Pusher from 'pusher-js';
import axios from 'axios';

import { key } from '../../config/pusher.json';
import Section from '../Section';

function Dices({ store }) {


  useEffect(() => {
    const pusher = new Pusher(key, {
      cluster: 'eu',
      forceTLS: true
    });

    const channel = pusher.subscribe(store.dices.channel);
    channel.bind('rolled-die', ({ value }) => {
    	store.dices.value = value;
    });

    return () => {
    	pusher.unsubscribe(store.dices.channel);
    }
  }, [store.dices.channel]);

  function rollDie() {
  	// todo: permit double clicking
  	axios.post('/api/test', {
  		channel: store.dices.channel,
  		event: 'roll-die'
  	});
  }

	return (
		<Section title={`Dices >> ${store.dices.channel}`}>
			{store.dices.value}
			<br />
			<button className="button" onClick={rollDie}>Roll Die</button>
		</Section>
	);
}

export default collect(Dices);
