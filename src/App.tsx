import { useEffect } from "react";
import UsersModule from "./store/modules/users";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(UsersModule.selectors.getUsers);
  const loading = useSelector(UsersModule.selectors.getUsersLoading);

  useEffect(() => {
    dispatch(UsersModule.actions.fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
