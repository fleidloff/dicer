import handleRollDie from "../../backend/pusher/handleRollDie"

// todo: make nicer, abstract better
export default async function (req, res) {
  const { channel, event, name, id } = req.body
  let hashedId

  if (event === "roll-die") {
    hashedId = await handleRollDie({ channel, name, id })
  }

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ hashedId }))
}
