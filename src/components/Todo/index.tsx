import React from "react";

import { Container, ModalCenter } from "./styles";

import { EmptyItem } from "../EmptyItem";
import { TodoAdd } from "../TodoAdd";

export function Todo() {
  return (
    <Container>
      <TodoAdd />
      <ModalCenter>
        <EmptyItem />
      </ModalCenter>
    </Container>
  );
}
