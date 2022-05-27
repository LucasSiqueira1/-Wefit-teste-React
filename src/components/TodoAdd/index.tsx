/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ItemTodoContent } from "../TodoList";
import { ContentAdd } from "./styles";

import { ButtonAdd } from "../ButtonAdd";
import { Input } from "../Input";

interface TodoAddProps {
  inputData: (todoTitle: ItemTodoContent) => void;
}

export function TodoAdd({ inputData }: TodoAddProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    inputValue
      ? inputData({ id: uuidv4(), title: inputValue })
      : alert("Digite algo");
    setInputValue("");
  };

  return (
    <ContentAdd>
      <Input propsValue={handleInputValue} data={inputValue} />
      <ButtonAdd onClick={handleAddTodo} />
    </ContentAdd>
  );
}
