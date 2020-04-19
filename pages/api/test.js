import Pusher from "pusher"
import publicSettings from "../../config/pusher.json"

import dotenv from "dotenv"
// todo: move dotenv config somewhere else
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function getRandomIntGreaterZero(max) {
  return getRandomInt(max - 1) + 1
}

const secretSettings = {
  appId: process.env.PUSHER_APP_ID,
  secret: process.env.PUSHER_SECRET,
}

const pusher = new Pusher({ ...secretSettings, ...publicSettings })

// todo: make nicer, abstract better
export default async function (req, res) {
  let promise = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify({ some: "timeout" }))
    }, 3000)
    const { channel, event } = req.body
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
  })

  await promise

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ some: "result", env: process.env.NODE_ENV }))

  /*pusher.get({ path: '/channels/my-channel', params: {} }, function(error, request, response) {
	  if(response.statusCode === 200) {
	    var result = JSON.parse( response.body );
	    var channelsInfo = result.occupied;
	    console.log(channelsInfo)
	  }
	});*/
}
