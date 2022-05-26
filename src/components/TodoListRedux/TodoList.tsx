import React from "react";
import { useAppDispatch, useAppSelector } from "../../common/hooks/ReduxHook";
import { TodoListAttributes } from "../../common/interfaces/TodoListFC/TodoListInterface";
import {
  convertToCompletedStatus,
  deleteRecordTodoList,
} from "../../redux/features/TodoList/TodoListSlice";
import { RootState } from "../../redux/store";

export const TodoList = () => {
  const todoListInStore: TodoListAttributes[] = useAppSelector(
    (state: RootState) => state.todoList.todoListItem
  );
  const dispatch = useAppDispatch();

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoListInStore.map((item, index) => (
          <div className="todo" key={index}>
            <li className={`todo-item ${item.completed ? "completed" : ""}`}>
              {item.text}
            </li>
            <button
              onClick={() => dispatch(convertToCompletedStatus(item))}
              className="complete-btn"
            >
              <i className="fas fa-check"></i>
            </button>
            <button
              onClick={() => dispatch(deleteRecordTodoList(item))}
              className="trash-btn"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
