import React, { useEffect, useState } from 'react';
import getAllUsers from '../services/users';
import deleteUser from '../services/deleteUser';

export default function ListUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const AllUsers = async () => {
      const dataUsers = await getAllUsers();
      setAllUsers(dataUsers);
    };
    AllUsers();
  }, [allUsers]);

  const removeUser = async (id) => {
    await deleteUser(id);
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        { allUsers && allUsers.map((user, index) => (
          <li key={ user.id }>
            <span datatest-id="admin_manage__element-user-table-item-number-">
              { index + 1 }
            </span>

            <span datatest-id="admin_manage__element-user-table-name-">
              { user.name }
            </span>

            <span datatest-id="admin_manage__element-user-table-email-">
              { user.email }
            </span>
            <span datatest-id="admin_manage__element-user-table-role-">
              { user.role }
            </span>

            <button
              type="button"
              datatest-id="admin_manage__element-user-table-remove-"
              // disabled={ () => (user.role === 'administrator') }
              onClick={ () => removeUser(user.id) }
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
