// users/reducers.ts
import * as types from "./constants";

interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

interface Action {
  type: string;
  payload?: any;
}

interface User {
  id: number;
  name: string;
  // Autres propriétés utilisateur
}

const initialState: State = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // Autres cas pour les utilisateurs
    default:
      return state;
  }
};

export default usersReducer;
