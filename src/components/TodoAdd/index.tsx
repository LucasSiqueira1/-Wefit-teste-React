import React, { useState } from "react";

import { TitleProps } from "../TodoList";
import { ButtonAdd } from "../ButtonAdd";
import { Input } from "../Input";

import { ContentAdd } from "./styles";

interface TodoAddProps {
  inputData: (todoTitle: TitleProps) => void;
}

export function TodoAdd({ inputData }: TodoAddProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      inputData({ title: inputValue });
    } else {
      alert("Preencha o campo de texto!");
    }
    setInputValue("");
  };

  return (
    <ContentAdd>
      <Input propsValue={handleInputValue} data={inputValue} />
      <ButtonAdd onClick={handleAddTodo} />
    </ContentAdd>
  );
}
