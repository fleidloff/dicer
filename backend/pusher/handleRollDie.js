import shortHash from 'short-hash';
import pusher from './pusher';

function getRandomIntGreaterZero(max) {
   return 1 + Math.floor(Math.random() * max);
}

export default function handleRollDie({ channel, name, id }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(reject, 3000);

     pusher.trigger(
      channel,
      "rolled-die",
      {
        value: {
          red: getRandomIntGreaterZero(6),
          yellow: getRandomIntGreaterZero(6),
          green: getRandomIntGreaterZero(6),
          blue: getRandomIntGreaterZero(6),
          white1: getRandomIntGreaterZero(6),
          white2: getRandomIntGreaterZero(6)
        },
        name,
        id: shortHash(id)
      },
      () => {
        clearTimeout(timeout)
        resolve()
      }
    )
  });
 
}