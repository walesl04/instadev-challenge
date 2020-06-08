import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";
import { Api } from "../../services/api";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  const listUsers = async () => {
    setUsers(await Api.get("users"));
  };

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} data={users.length > 0} />
    </div>
  );
};

export default UsersRoute;
