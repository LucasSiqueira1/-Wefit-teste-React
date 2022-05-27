import React from "react";

import { InputContent } from "./styles";

interface InputProps {
  data: string;
  propsValue: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input({ propsValue, data }: InputProps) {
  return (
    <InputContent
      type="text"
      placeholder="Digite"
      onChange={propsValue}
      value={data}
    />
  );
}
