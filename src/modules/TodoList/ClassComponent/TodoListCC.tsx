import React, { Component } from "react";
import { TodoListCCState } from "../../../common/interfaces/TodoListCC/TodoListInterface";
import { TodoListAttributes } from "../../../common/interfaces/TodoListFC/TodoListInterface";

export default class TodoListCC extends Component<{}, TodoListCCState> {
  constructor(props: TodoListAttributes[]) {
    super(props);
    this.state = {
      inputValue: "",
      todoList: [],
    };
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClickSubmitBtn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (this.state.inputValue !== "" && this.state.inputValue.trim() !== "") {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            id: Date.now(),
            text: this.state.inputValue,
            completed: false,
          },
        ],
        inputValue: "",
      });
    }
  };

  handleClickCompletedBtn = (itemId: number) => {
    this.setState({
      todoList: this.state.todoList.map((el) => {
        if (el.id === itemId) return { ...el, completed: !el.completed };
        return el;
      }),
    });
  };

  handleClickDeleteBtn = (itemId: number) => {
    this.setState({
      todoList: this.state.todoList.filter((el) => el.id !== itemId),
    });
  };

  render() {
    return (
      <div className="bg-todo-list">
        <header>
          <h3>TodoList with Class Component{this.state.inputValue}</h3>
        </header>
        <form>
          <input
            value={this.state.inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleChangeInput(e)
            }
            type="text"
            className="todo-input"
          />
          <button
            onClick={(e: React.FormEvent<HTMLButtonElement>) =>
              this.handleClickSubmitBtn(e)
            }
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </form>
        <div className="todo-container">
          <ul className="todo-list">
            {this.state.todoList.map((item) => (
              <div className="todo" key={item.id}>
                <li
                  className={`todo-item ${item.completed ? "completed" : ""}`}
                >
                  {item.text}
                </li>
                <button
                  onClick={() => this.handleClickCompletedBtn(item.id)}
                  className="complete-btn"
                >
                  <i className="fas fa-check"></i>
                </button>
                <button
                  onClick={() => this.handleClickDeleteBtn(item.id)}
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
  }
}
