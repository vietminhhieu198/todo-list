import React from "react";
import { TodoListAttributes } from "../../common/interfaces/TodoListFC/TodoListInterface";

interface TodoProps {
  todo: TodoListAttributes;
  todoList: TodoListAttributes[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoListAttributes[]>>;
}

const Todo: React.FC<TodoProps> = ({ todo, todoList, setTodoList }) => {
  const handleClickCompletedBtn = () => {
    setTodoList(
      todoList.map((item) => {
        if (todo.id === item.id) return { ...item, completed: !item.completed };
        return item;
      })
    );
  };

  const handleClickDeleteBtn = () => {
    setTodoList(todoList.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={handleClickCompletedBtn} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleClickDeleteBtn} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
