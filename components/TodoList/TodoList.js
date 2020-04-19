import React from "react";
import { collect } from "react-recollect";

import Section from "../Section";

function TodoList({ store }) {
  return (
    <Section title="Todos">
      <ul>
        {store.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </Section>
  );
}

export default collect(TodoList);
