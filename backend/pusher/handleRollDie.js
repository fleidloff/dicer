import pusher from './pusher';

function getRandomIntGreaterZero(max) {
   return 1 + Math.floor(Math.random() * max);
}

export default function handleRollDie(channel) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(reject, 3000);

     pusher.trigger(
      channel,
      "rolled-die",
      {
        value: getRandomIntGreaterZero(6),
      },
      () => {
        clearTimeout(timeout)
        resolve()
      }
    )
  });
 
}