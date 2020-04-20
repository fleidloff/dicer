import Die from "./Die"

export const ROLLING = "die-rolling"

export default function Dice({ value, color = "white" }) {
  // todo: add styles
  // https://medium.com/better-programming/creating-dice-in-flexbox-in-css-a02a5d85e516
  switch (value) {
    case ROLLING:
      return <div className="die">... rolling ...</div>
    case null:
      return ""
    default:
      return (
        <>
          <Die value={value.red} color="red" />
          <Die value={value.yellow} color="yellow" />
          <Die value={value.green} color="green" />
          <Die value={value.blue} color="blue" />
          <Die value={value.white1} color="white" />
          <Die value={value.white2} color="white" />
        </>
      )
  }
}
