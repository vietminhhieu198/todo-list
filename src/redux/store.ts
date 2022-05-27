import { configureStore, Store } from "@reduxjs/toolkit";
import TodoListSlice from "./features/TodoList/TodoListSlice";

export const store: Store = configureStore({
  reducer: {
    todoList: TodoListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
