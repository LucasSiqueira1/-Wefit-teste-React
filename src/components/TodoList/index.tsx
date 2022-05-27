/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoAdd } from "../TodoAdd";
import { ContentList } from "./styles";

export interface ItemTodoContent {
  id: string;
  title: string;
}

export function TodoList() {
  const [todoList, setTodoList] = useState<any>([]);

  const newItemTodo = (todoTitle: ItemTodoContent) => {
    setTodoList([...todoList, { id: uuidv4(), title: todoTitle.title }]);
  };

  const deleteItemTodo = (itemId: ItemTodoContent) => {
    const newTodoList = todoList.filter((item: any) => item.id !== itemId);
    setTodoList(newTodoList);
  };

  return (
    <ContentList>
      {todoList.map((item: any) => (
        <div key={item.id}>
          <div>
            <div>{item.title}</div>
            <button onClick={() => deleteItemTodo(item.id)}> X</button>
          </div>
        </div>
      ))}
      <TodoAdd inputData={newItemTodo} />
    </ContentList>
  );
}
