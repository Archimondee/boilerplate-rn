import type { UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  userData: {} as any,
};

export function userReducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case "ADD_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
