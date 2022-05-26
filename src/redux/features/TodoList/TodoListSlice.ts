import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoListAttributes } from "../../../common/interfaces/TodoListFC/TodoListInterface";

export interface TodoListState {
  inputValue: string;
  todoListItem: TodoListAttributes[];
}

const initialState: TodoListState = {
  inputValue: "",
  todoListItem: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    getValueFromInput: (
      state: TodoListState,
      action: PayloadAction<string>
    ) => {
      state.inputValue = action.payload;
    },
    addRecordTodoList: (state: TodoListState) => {
      if (state.inputValue !== "") {
        state.todoListItem = [
          ...state.todoListItem,
          {
            id: Date.now(),
            text: state.inputValue,
            completed: false,
          },
        ];
        state.inputValue = "";
      }
    },
    deleteRecordTodoList: (
      state: TodoListState,
      action: PayloadAction<TodoListAttributes>
    ) => {
      state.todoListItem = state.todoListItem.filter(
        (item) => item.id !== action.payload.id
      );
    },
    convertToCompletedStatus: (
      state: TodoListState,
      action: PayloadAction<TodoListAttributes>
    ) => {
      state.todoListItem = state.todoListItem.map((el) => {
        if (el.id === action.payload.id)
          return { ...el, completed: !el.completed };
        return el;
      });
    },
  },
});

export const {
  getValueFromInput,
  addRecordTodoList,
  deleteRecordTodoList,
  convertToCompletedStatus,
} = todoListSlice.actions;

export default todoListSlice.reducer;
