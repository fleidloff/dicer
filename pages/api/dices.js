import handleRollDie from "../../backend/pusher/handleRollDie"

// todo: make nicer, abstract better
export default async function (req, res) {
  const { channel, event, name, id } = req.body
  if (event === "roll-die") {
    await handleRollDie({ channel, name, id })
  }

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ some: "result" }))
}
