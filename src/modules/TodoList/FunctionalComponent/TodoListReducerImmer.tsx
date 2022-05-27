import React, { useReducer, useState } from "react";
import { TodoListType } from "../../../common/interfaces/TodoListFC/ReducerTodo";
import { todoReducerImmer } from "../../../components/TodoListReducer/ReducerTodoList";

export const TodoListReducerImmer = () => {
  const [todoList, dispatch] = useReducer(todoReducerImmer, []);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickSubmitBtn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue !== "" && inputValue.trim() !== "") {
      dispatch({
        type: TodoListType.ADD_RECORD,
        payload: inputValue,
      });
      setInputValue("");
    }
  };

  const handleClickCompletedBtn = (itemIndex: number) => {
    dispatch({ type: TodoListType.IS_COMPLETED, payload: itemIndex });
  };

  const handleClickDeleteBtn = (itemId: number) => {
    dispatch({ type: TodoListType.DELETE_RECORD, payload: itemId });
  };

  return (
    <div className="bg-todo-list">
      <header>
        <h3>TodoList with Functional Component (useReducer + ImmerJS)</h3>
      </header>
      <form>
        <input
          value={inputValue}
          onChange={handleChangeInput}
          type="text"
          className="todo-input"
        />
        <button
          onClick={handleClickSubmitBtn}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      <div className="todo-container">
        <ul className="todo-list">
          {todoList.map((item, index) => (
            <div className="todo" key={item.id}>
              <li className={`todo-item ${item.completed ? "completed" : ""}`}>
                {item.text}
              </li>
              <button
                onClick={() => handleClickCompletedBtn(index)}
                className="complete-btn"
              >
                <i className="fas fa-check"></i>
              </button>
              <button
                onClick={() => handleClickDeleteBtn(item.id)}
                className="trash-btn"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
