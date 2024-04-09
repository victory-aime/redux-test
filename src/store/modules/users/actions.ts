// users/actions.ts
import { Dispatch } from "redux";
import * as types from "./constants";

interface User {
  id: number;
  name: string;
  // Autres propriétés utilisateur
}

export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: User[]) => ({
  type: types.FETCH_USERS_SUCCESS as typeof types.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: string) => ({
  type: types.FETCH_USERS_FAILURE as typeof types.FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers: any = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await response.json();
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
