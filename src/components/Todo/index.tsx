import React from "react";

import { Container, ModalCenter } from "./styles";

import { EmptyItem } from "../EmptyItem";
import { TodoList } from "../TodoList";

export function Todo() {
  return (
    <Container>
      <TodoList />
      <ModalCenter>
        <EmptyItem />
      </ModalCenter>
    </Container>
  );
}
