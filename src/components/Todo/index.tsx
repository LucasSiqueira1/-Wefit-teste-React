import React from "react";

import { Container, Content } from "./styles";

import { Input } from "../Input";
import { ButtonAdd } from "../ButtonAdd";

export function Todo() {
  return (
    <Container>
      <Content>
        <Input />
        <ButtonAdd />
      </Content>
    </Container>
  );
}
