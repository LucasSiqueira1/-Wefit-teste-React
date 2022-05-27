import React from "react";
import { ContentAdd } from "./styles";

import { ButtonAdd } from "../ButtonAdd";
import { Input } from "../Input";

interface TodoAddProps {
  handleInputData: () => void;
}

export function TodoAdd({ handleInputData }: TodoAddProps) {
  return (
    <ContentAdd>
      <Input propsValue={handleInputData} />
      <ButtonAdd onClick="" />
    </ContentAdd>
  );
}
