// users/index.ts
import * as actions from "./actions";
import * as selectors from "./selectors";
import reducer from "./reducers";

const UsersModule = {
  actions,
  selectors,
  reducer,
};

export default UsersModule;
