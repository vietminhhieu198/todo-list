import produce from "immer";
import {
  TodoListAction,
  TodoListType,
} from "../../common/interfaces/TodoListFC/ReducerTodo";
import { TodoListAttributes } from "../../common/interfaces/TodoListFC/TodoListInterface";

export const todoReducerImmer = (
  todoList: TodoListAttributes[],
  action: TodoListAction
): TodoListAttributes[] => {
  const { type, payload } = action;
  switch (type) {
    case TodoListType.ADD_RECORD: {
      return produce(todoList, (draftState) => {
        draftState.push({
          id: Date.now(),
          text: payload as string,
          completed: false,
        });
      });
    }
    case TodoListType.DELETE_RECORD: {
      return todoList.filter((el) => el.id !== payload);
    }
    case TodoListType.IS_COMPLETED: {
      return produce(todoList, (draftState) => {
        draftState[payload as number].completed =
          !draftState[payload as number]?.completed;
      });
    }
    default:
      return todoList;
  }
};
