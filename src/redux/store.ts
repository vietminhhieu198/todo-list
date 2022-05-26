import { configureStore, Store } from "@reduxjs/toolkit";
import CounterSlice from "./features/Counter/CounterSlice";
import TodoListSlice from "./features/TodoList/TodoListSlice";

export const store: Store = configureStore({
  reducer: {
    counter: CounterSlice,
    todoList: TodoListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
