import { getCookieStore } from "next-persist";
import { TEST_REDUX } from "../constants";

const INITIAL_STATE = {
  testText: "SOME TEXT TEST",
};

const persistedState = getCookieStore("test", INITIAL_STATE);

export const testReducer = (state = persistedState, action) => {
  switch (action.type) {
    case TEST_REDUX:
      return {
        ...state,
        testText: action.payload,
      };
    default:
      return state;
  }
};
