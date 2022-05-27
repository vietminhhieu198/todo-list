import React from "react";
import { TodoListAttributes } from "../../common/interfaces/TodoListFC/TodoListInterface";

interface TodoListFormProps {
  inputText: string;
  todoList: TodoListAttributes[];
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setTodoList: React.Dispatch<React.SetStateAction<TodoListAttributes[]>>;
}

const TodoListForm: React.FC<TodoListFormProps> = ({
  inputText,
  todoList,
  setInputText,
  setTodoList,
}) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClickSubmitBtn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputText !== "" && inputText.trim() !== "") {
      setTodoList([
        ...todoList,
        { id: Date.now(), text: inputText, completed: false },
      ]);
      setInputText("");
    }
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeInput(e)
        }
        type="text"
        className="todo-input"
      />
      <button
        onClick={(e: React.FormEvent<HTMLButtonElement>) =>
          handleClickSubmitBtn(e)
        }
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default TodoListForm;
