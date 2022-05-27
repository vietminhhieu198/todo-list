import React from "react";
import { useAppDispatch, useAppSelector } from "../../common/hooks/ReduxHook";
import {
  addRecordTodoList,
  getValueFromInput,
} from "../../redux/features/TodoList/TodoListSlice";
import { RootState } from "../../redux/store";

export const TodoListForm = () => {
  const inputText = useAppSelector(
    (state: RootState) => state.todoList.inputValue
  );
  const dispatch = useAppDispatch();

  const handleChangeTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getValueFromInput(e.target.value));
  };

  const handleClickAddTodoRecord = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addRecordTodoList());
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={handleChangeTodoInput}
        type="text"
        className="todo-input"
      />
      <button
        onClick={handleClickAddTodoRecord}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};
