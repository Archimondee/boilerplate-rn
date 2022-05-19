/* eslint-disable @typescript-eslint/no-var-requires */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "./user/reducers";
import type { UserState } from "./user/types";

export interface StoreStateType {
  user: UserState;
}

const rootReducer = combineReducers({
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  return store;
}
