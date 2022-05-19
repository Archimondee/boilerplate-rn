export interface UserState {
  userData: any;
}

export const ADD_USER_DATA = "ADD_USER_DATA";

interface AddUserAction {
  type: typeof ADD_USER_DATA;
  payload: string;
}

export type UserActionTypes = AddUserAction;
