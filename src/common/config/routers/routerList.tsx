import { HomePage } from "../../../pages/Home/HomePage";
import { TodoListCCPage } from "../../../pages/TodoList/ClassComponent/TodoListCCPage";
import { TodoListReducerImmerPage } from "../../../pages/TodoList/FunctionalComponent/TodoListReducerImmerPage";
import { TodoListReduxPage } from "../../../pages/TodoList/FunctionalComponent/TodoListReduxPage";
import { TodoListStatePage } from "../../../pages/TodoList/FunctionalComponent/TodoListStatePage";
import { routerPath } from "../../constants/routerPath";
import { RouteAttributes } from "../interfaces/route";

export const routerList: RouteAttributes[] = [
  {
    path: routerPath.common.HOME,
    element: <HomePage />,
  },
  {
    path: routerPath.todo.CLASS_COMPONENT,
    element: <TodoListCCPage />,
  },
  {
    path: routerPath.todo.FC_STATE,
    element: <TodoListStatePage />,
  },
  {
    path: routerPath.todo.FC_REDUX,
    element: <TodoListReduxPage />,
  },
  {
    path: routerPath.todo.FC_REDUX_IMMER,
    element: <TodoListReducerImmerPage />,
  },
];
