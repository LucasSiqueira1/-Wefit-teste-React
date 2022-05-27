import React from "react";

import { Container, Content, ModalCenter } from "./styles";

import { Input } from "../Input";
import { ButtonAdd } from "../ButtonAdd";
import { EmptyItem } from "../EmptyItem";

export function Todo() {
  return (
    <Container>
      <Content>
        <Input />
        <ButtonAdd />
      </Content>
      <ModalCenter>
        <EmptyItem />
      </ModalCenter>
    </Container>
  );
}
