import React from "react";
import { TodoListAttributes } from "../../common/interfaces/TodoListFC/TodoListInterface";
import Todo from "./Todo";

interface TodoListProps {
  todoList: TodoListAttributes[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoListAttributes[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, setTodoList }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
