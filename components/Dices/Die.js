export const ROLLING = "die-rolling"

export default function Die({ value, color = "white" }) {
  // todo: add styles
  // https://medium.com/better-programming/creating-dice-in-flexbox-in-css-a02a5d85e516
  switch (value) {
    case ROLLING:
      return <div className="die">... rolling ...</div>
    default:
      return <div className="die">{value}</div>
  }
}
