import React from "react";

import { TodoList } from "../TodoList";

import { Content, Container, ModalCenter } from "./styles";

export function Todo() {
  return (
    <Content>
      <Container>
        <ModalCenter>
          <TodoList />
        </ModalCenter>
      </Container>
    </Content>
  );
}
