import React from "react";
import { TodoList } from "../../../components/TodoListRedux/TodoList";
import { TodoListForm } from "../../../components/TodoListRedux/TodoListForm";

export const TodoListRedux = () => {
  return (
    <div className="bg-todo-list">
      <header>
        <h3>TodoList with Functional Component (Redux)</h3>
      </header>
      <TodoListForm />
      <TodoList />
    </div>
  );
};
