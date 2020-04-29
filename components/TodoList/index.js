import { store } from "react-recollect"
import TodoList from "./TodoList"

store.todos = [
  "cleanup Qwixx.js -> extract user stuff",
  "dice + dice rolling design",
  "translations -> with loaded translations on build",
]

export default TodoList
