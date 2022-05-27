import React from "react";

import { Container, ModalCenter } from "./styles";

import { EmptyItem } from "../EmptyItem";
import { TodoAdd } from "../TodoAdd";

export function Todo() {
  const teste = () => {
    alert("teste");
  };
  return (
    <Container>
      <TodoAdd inputData={teste} />
      <ModalCenter>
        <EmptyItem />
      </ModalCenter>
    </Container>
  );
}
