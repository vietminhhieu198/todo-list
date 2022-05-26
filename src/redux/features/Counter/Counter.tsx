import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/hooks/ReduxHook";
import { RootState } from "../../store";
import { decrement, increment } from "./CounterSlice";

export function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
