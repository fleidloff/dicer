import { store } from "react-recollect"
import TodoList from "./TodoList"

store.todos = [
  "check why css grid is not working in dicer app",
  "locally use websockets instead of pusher (because concurrent connections)",
  "cleanup Qwixx.js -> extract user stuff",
  "dice + dice rolling design",
  "translations -> with loaded translations on build",
]

export default TodoList
