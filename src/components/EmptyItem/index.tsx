import React from "react";

import { EmptyItemContainer, TextSpan } from "./styles";

export function EmptyItem() {
  return (
    <EmptyItemContainer>
      <TextSpan>Nenhum item cadastrado</TextSpan>
    </EmptyItemContainer>
  );
}
