import React from "react";

import { InputContent } from "./styles";

interface InputPros {
  propsValue: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input({ propsValue }: InputPros) {
  return (
    <InputContent type="text" placeholder="Digite" onChange={propsValue} />
  );
}
