import React, { useState } from "react";
import TodoList from "../../../components/TodoListState/TodoList";
import TodoListForm from "../../../components/TodoListState/TodoListForm";
import "../../../components/TodoListState/TodoList.scss";
import { TodoListAttributes } from "../../../common/interfaces/TodoListFC/TodoListInterface";

export const TodoListState: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoListAttributes[]>([]);

  return (
    <div className="bg-todo-list">
      <header>
        <h3>TodoList with Functional Component (State)</h3>
      </header>
      <TodoListForm
        inputText={inputText}
        todoList={todoList}
        setInputText={setInputText}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};
