import { combineReducers } from "redux";

// import all reducers
import { testReducer } from "./test/reducer";
import { modalReducer } from "./modal/reducers";
import { userReducer } from "./user/reducers";
import { drawerReducer } from "./drawer/reducers";

// COMBINED REDUCERS
const reducers = {
  test: testReducer,
  modal: modalReducer,
  user: userReducer,
  drawer: drawerReducer,
};

export default combineReducers(reducers);
