import React from "react";

import plusAdd from "../../assets/icons/ic-add@2x.png";
import { ButtonContainer, IconPlusButton } from "./styles";

export function ButtonAdd() {
  return (
    <ButtonContainer>
      <IconPlusButton src={plusAdd} alt="Botão de adicionar itens" />
    </ButtonContainer>
  );
}
