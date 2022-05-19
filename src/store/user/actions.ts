import { ADD_USER_DATA } from "./types";

export function addUserData(data: any) {
  return {
    type: ADD_USER_DATA,
    payload: data,
  };
}
