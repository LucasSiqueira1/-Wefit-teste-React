import React from "react";
import { Todo } from "./components/Todo";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Todo />
      <GlobalStyle />
    </>
  );
}
