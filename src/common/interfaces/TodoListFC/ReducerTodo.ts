import { TodoListAttributes } from "./TodoListInterface";

export enum TodoListType {
  ADD_RECORD = "add-record",
  IS_COMPLETED = "is-complete",
  DELETE_RECORD = "delete-record",
}

export interface TodoListAction {
  type: TodoListType;
  payload?: TodoListAttributes | number | string;
}
