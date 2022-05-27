import React from "react";

import { InputContent } from "./styles";

interface InputPros {
  data: string;
  propsValue: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input({ propsValue, data }: InputPros) {
  return (
    <InputContent
      type="text"
      placeholder="Digite"
      onChange={propsValue}
      value={data}
    />
  );
}
