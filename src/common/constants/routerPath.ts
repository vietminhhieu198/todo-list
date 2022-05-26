export const routerPath = {
  todo: {
    CLASS_COMPONENT: "/todo-list/class-component",
    FC_STATE: "/todo-list/functional-component/state",
    FC_REDUX: "/todo-list/functional-component/redux",
    FC_REDUX_IMMER: "/todo-list/functional-component/reducer-immer",
  },
  common: {
    HOME: "/",
  },
  test: {
    COUNTER: "redux/counter",
  },
};

export const pathArrayName = (): string[] => {
  const arrayResult: string[] = [];

  for (const [, value] of Object.entries(routerPath)) {
    if (typeof value === "object") {
      for (const [, secondValue] of Object.entries(value)) {
        arrayResult.push(secondValue);
      }
    } else if (typeof value === "string") {
      arrayResult.push(value);
    }
  }

  return arrayResult;
};
